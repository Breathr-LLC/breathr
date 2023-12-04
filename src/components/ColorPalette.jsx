import React from "react";

const ColorPalette = ({currentColor, changeColor}) => {

  const colors = [
    'red', 'maroon', 'deeppink', 'fuchsia', 'pink',
    'orange', 'darkorange',
    'yellow', 'gold', 'khaki',
    'lime', 'green', 'limegreen', 'darkgreen', 'olive', 'darkolivegreen', 'forestgreen',
    'turquoise', 'cyan', 'aqua',
    'teal', 
    'blue', 'dodgerblue', 'royalblue', 'mediumblue', 'darkblue', 'navy',
    'indigo', 'blueviolet', 'darkviolet',
    'purple', 'violet',
    'gray', 'lightgrey', 'darkgrey', 'slategray',
    'white', 'snow', 'ivory',
    'black'
  ];
  
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