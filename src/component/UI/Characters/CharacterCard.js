import {React, useState} from 'react';
import { Card, Container } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { ogcard } from '../../../Content';

import classes from './CharacterCard.module.css';

const CharacterCard = (props) => {
  const [hover, setHovering] = useState(false);

  const onHoverHandler = event => {
    event.preventDefault();
    setHovering(true)
  }

  const onLeaveHandler = event =>{
    event.preventDefault();
    setHovering(false)
  }
  
  return (

    //  ${classes.card} ${props.className} > If want to inherit card 

    <div className={`flex flex-col object-contain m-auto p-3`}>
    
        <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
          <img className='rounded-3xl h-96 w-60 m-auto' src={props.image} onMouseMove={onHoverHandler}/>
            <Container className='flex flex-col object-contain m-auto p-0'>
              <figure className='relative h-96 w-60 m-auto'>
                <img className='rounded-3xl' src={props.image} onMouseLeave={onLeaveHandler}/>
                <figcaption className='absolute h-96 w-60 rounded-3xl top-0 mx-auto 
                                       backdrop-blur-xl backdrop-opacity-90
                                     text-black text-xl text-center font-semibold' 
                           onMouseLeave={onLeaveHandler}>{props.tag}</figcaption>
              </figure>
            </Container> 
        </ReactCardFlip>

        
    </div>
  );
};

export default CharacterCard;
