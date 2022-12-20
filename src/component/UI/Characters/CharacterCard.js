import {React, useState} from 'react';
import { Card, Container } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { ogcard } from '../../../Content';
import Fade from '../../Animation/Fade';

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

    <Fade 
      direction = "left"
      speed="1"
      delay={props.delay}
      className={`flex flex-col object-contain m-auto p-3`}>
    
        <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
          {/* Front of Card */}
          <img className='rounded-3xl h-96 w-60 m-auto' src={props.image} onMouseMove={onHoverHandler}/>

          {/* Back of Card */}
            <Container className='flex flex-col object-contain m-auto p-0'>
              <figure className='relative h-96 w-60 m-auto'>
                <img className='rounded-3xl' src={props.image} onMouseLeave={onLeaveHandler}/>
                <figcaption className='absolute h-96 w-60 rounded-3xl top-0 mx-auto px-5 pt-40
                                       backdrop-blur-xl backdrop-opacity-90
                                     text-black text-2xl text-center font-bold' 
                            onMouseLeave={onLeaveHandler}>{props.tag}</figcaption>
              </figure>
            </Container> 

        </ReactCardFlip>

        
    </Fade>
  );
};

export default CharacterCard;
