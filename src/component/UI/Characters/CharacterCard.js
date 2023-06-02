import { React, useState } from "react";
import { Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const [hover, setHovering] = useState(false);

  const onHoverHandler = (event) => {
    event.preventDefault();
    setHovering(true);
  };

  const onLeaveHandler = (event) => {
    event.preventDefault();
    setHovering(false);
  };

  return (
    //  ${classes.card} ${props.className} > If want to inherit card

    // Adjusting padding between cards
    <Link to={`/clans/` + props.id} className={`flex flex-col px-3 pb-3 ${props.className}`} key={props.id}>
      <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
        {/* Front of Card */}
        <img
          className="rounded-xl lg:h-72 lg:w-48 sm:rounded-lg sm:h-44 sm:w-28 m-auto"
          src={props.image}
          onMouseMove={onHoverHandler}
          alt={props.name}
        />

        {/* Back of Card */}
        <Container className="flex flex-col object-contain m-auto p-0">
          <figure className="relative m-auto">
            <img
              className="rounded-3xl lg:h-72 lg:w-48 sm:rounded-2xl sm:h-44 sm:w-28"
              src={props.image}
              onMouseLeave={onLeaveHandler}
              alt={props.name}
            />
            <figcaption
              className="absolute lg:h-72 lg:w-48 rounded-3xl sm:rounded-2xl sm:h-44 sm:w-28 top-0 m-auto 
                        lg:pt-28 sm:pt-[4.5rem] lg:px-4 sm:px-2
                        backdrop-blur-xl backdrop-opacity-90
                      text-black lg:text-2xl sm:text-sm text-center font-bold"
              onMouseLeave={onLeaveHandler}
            >
              {props.tag}
            </figcaption>
          </figure>
        </Container>
      </ReactCardFlip>
    </Link>
  );
};

export default CharacterCard;
