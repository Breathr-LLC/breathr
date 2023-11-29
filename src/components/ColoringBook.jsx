import React, { useState } from 'react';
import FreeHandCanvas from './FreeHandCanvas';
import ColorPalette from './ColorPalette';
import ColoringBookCanvas from './ColoringBookCanvas';

const ColoringBook = () => {
  const [currentColor, setCurrentColor] = useState('blue');

  return (
    <div>
      <div className= "canvas">
        <ColoringBookCanvas currentColor={currentColor}/>
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
  )
};

export default ColoringBook;