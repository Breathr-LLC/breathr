import React from 'react';

const Card = ({title, content}) => {
  return (

  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
  )
};

export default Card;