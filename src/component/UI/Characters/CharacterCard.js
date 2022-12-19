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

    <div className={`flex flex-col object-contain mx-auto`}>
    
        <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
          <img className='rounded-3xl h-96 w-60' src={props.image} onMouseMove={onHoverHandler}/>
            <Container>
              <figure className='relative h-96 w-60'>
                <img className='rounded-3xl' src={props.image} onMouseLeave={onLeaveHandler}/>
                <figcaption className='absolute h-96 w-60 backdrop-blur-xl backdrop-opacity-90 text-black text-xl text-center align-middle font-semibold rounded-3xl top-0 p-4' onMouseLeave={onLeaveHandler}>{props.tag}</figcaption>
              </figure>
            </Container> 
        </ReactCardFlip>

        
    </div>
  );
};

export default CharacterCard;
