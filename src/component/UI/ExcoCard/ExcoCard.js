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
                      lg:py-5 lg:px-7 px-3 py-2 ">
      
          <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
            {/* Front of Card */}
            <div> 
                <img className='rounded-3xl h-96 w-60 m-auto' src={props.image} onMouseMove={onHoverHandler} alt={props.name}/>
                <div className="text-2xl">{props.name}</div>
                <div className='pt-1'>{props.tag}</div>
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
  