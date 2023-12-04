import React, { useState } from 'react';
import ColorPalette from './ColorPalette';
import ColoringBookCanvas from './ColoringBookCanvas';

const ColoringBook = () => {
  const [currentColor, setCurrentColor] = useState('blue');

  return (
    
    <div className="flex">
    
      <div className="">
        <ColoringBookCanvas currentColor={currentColor}/>
      </div>
    
      <div>
        <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      </div>
    </div>
  );
};

export default ColoringBook;
