import React, { useRef, useEffect } from 'react';

const Canvas = ({ fillColors, onFill }) => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const getMousePos = (e) => {
    const bounds = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    };
  };

  const drawLine = (originalPos, newPos) => {
    const context = canvasRef.current.getContext('2d');
    context.beginPath();
    context.moveTo(originalPos.x, originalPos.y);
    context.lineTo(newPos.x, newPos.y);
    context.stroke();
    context.closePath();
  };

  const startDrawing = (e) => {
    const pos = getMousePos(e);
    lastPosition.current = pos;
    isDrawing.current = true;
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const newPos = getMousePos(e);
    drawLine(lastPosition.current, newPos);
    lastPosition.current = newPos;
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 800;
    context.strokeStyle = 'black';
    context.lineWidth = 5;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
