import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div id={`${props.id}`} className={` ${props.className} ${classes.card}`}>{props.children}</div>
  );
};

export default Card;
