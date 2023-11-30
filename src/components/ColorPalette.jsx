import React from "react";

const ColorPalette = ({currentColor, changeColor}) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink'];
  
  let index = 0;

  return(
    <div className="color-palette">
        {colors.map(color => { 
            const activeClass = currentColor === color ? 'color-swatch-active' : '';
            return (
                <div onClick={() => {changeColor(color)}} key={index++}>
                    <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                </div>
            )
        })}
    </div>
)

};

export default ColorPalette;