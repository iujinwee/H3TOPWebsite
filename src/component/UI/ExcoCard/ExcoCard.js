import {React, useState} from 'react';
import { Container } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

const ExcoCard = (props) => {
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

    // Adjusting padding between cards
    <div className="flex flex-col
                    px-6 pb-5 ">
    
        <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
          {/* Front of Card */}
          <div className='flex flex-col justify-center items-center
                          font-bold text-xl'>
            <img className='rounded-3xl h-96 w-60 m-auto' src={props.image} onMouseMove={onHoverHandler} alt={props.name}/>
            <span>{props.name}</span>
            <span>{props.tag}</span>
          </div>
          {/* Back of Card */}
            <Container className='flex flex-col object-contain m-auto p-0'>
              <figure className='relative h-96 w-60 m-auto'>
                <img className='rounded-3xl' src={props.image} onMouseLeave={onLeaveHandler} alt={props.name}/>
                <figcaption className='absolute h-96 w-60 rounded-3xl top-0 mx-auto px-5 pt-40
                                       backdrop-blur-xl backdrop-opacity-90
                                     text-black text-2xl text-center font-bold' 
                            onMouseLeave={onLeaveHandler}>{props.tag}</figcaption>
              </figure>
            </Container> 

        </ReactCardFlip>

    </div>
  );
};

export default ExcoCard;
