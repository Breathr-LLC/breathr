import React, { useState } from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import PoemCard from './PoemCard';

const cards = 10;
const maxVisibility = 3;



const PoemCarousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel flex flex-col items-center justify-center p-4">
      {active > 0 && (
        <button className= "nav left" onClick={()=> setActive((i) => i - 1)}>
          <MdChevronLeft/>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div className='card-container'
        style={{
          "--active": i === active ? 1 : 0,
          "--offset": (active - i) / 3,
          "--direction": Math.sign(active - i),
          "--abs-offset": Math.abs(active - i) / 3,
          "pointer-events": active === i ? "auto" : "none",
          opacity: Math.abs(active - i) >= maxVisibility ? "0" : "1",
          display: Math.abs(active - i) > maxVisibility ? "none" : "block"
      }}
        >
          {child}
          </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <MdChevronRight/>
        </button>
      )}
      </div>
  )
};

export default PoemCarousel;
