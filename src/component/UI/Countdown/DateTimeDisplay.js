import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='font-blackopsone'>{value}</p>
      <span className='font-blackopsone'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;