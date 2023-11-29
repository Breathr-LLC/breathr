import React, { useEffect, useRef, useState } from 'react';
import paper from 'paper';
import svgData from '../assets/sun-flower-template.svg'; // Path to your SVG file
import ColorPalette from './ColorPalette';

const ColoringBookCanvas = ({ currentColor }) => {
  // const [currentColor, setCurrentColor] = useState('black');
  const canvasRef = useRef(null);
  const svgPaths = useRef([]);
  const currentPath = useRef(null);
  
  useEffect(() => {
    // Setup Paper.js only once when the component mounts
    if (canvasRef.current) {
      paper.setup(canvasRef.current);
      paper.project.importSVG(svgData, (svg) => {
        // Handle SVG if needed
      });
    }
  }, []);

  useEffect(() => {
    // Drawing logic
    console.log('current color:', currentColor);
    const tool = new paper.Tool();

    tool.onMouseDown = (event) => {
      currentPath.current = new paper.Path({
        segments: [event.point],
        strokeColor: currentColor, // Start with the current color
        strokeWidth: 5
      });
    };

    tool.onMouseDrag = (event) => {
      if (currentPath.current) {
        currentPath.current.add(event.point);
        // Update the strokeColor with the latest color
        currentPath.current.strokeColor = currentColor;
      }
    };

    tool.onMouseUp = () => {
      if (currentPath.current) {
        currentPath.current.simplify();
        currentPath.current = null; // Reset the current path
      }
    };

    // Cleanup function to remove tool event listeners when the component unmounts or color changes
    return () => {
      tool.remove();
    };
  }, [currentColor]);

  const clearCanvas = () => {
    paper.project.activeLayer.removeChildren();
    paper.view.update();
    if (canvasRef.current) {
      paper.setup(canvasRef.current);
      paper.project.importSVG(svgData, (svg) => {
        // Handle SVG if needed
      });
    }
  };

  const extractPaths = (item) => {
    let paths = [];
    item.children.forEach((child) => {
      if (child instanceof paper.Path) {
        paths.push(child);
      } else if (child.hasChildren()) {
        paths = paths.concat(extractPaths(child));
      }
    });
    return paths;
  };

  const isWithinSvgBorder = (point) => {
    return svgPaths.current.some(path => path.contains(point));
  };



  return (
    <div>
      <canvas ref={canvasRef} id="coloring-canvas" />
      <button onClick={clearCanvas}>Clear</button>
    </div>
  );
};

export default ColoringBookCanvas;
