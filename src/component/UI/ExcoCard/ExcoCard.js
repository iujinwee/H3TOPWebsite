import { React, useState } from "react";
import { Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

const ExcoCard = (props) => {
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
    // Adjusting padding between cards
    <div
      className="flex flex-col
                    lg:px-4 lg:pb-2 sm:px-1 sm:py-0"
    >
      <ReactCardFlip isFlipped={hover} flipDirection="horizontal">

        {/* Front of Card */}
        <div
          className="relative grid m-auto place-items-center
                          lg:h-96 lg:w-60 
                          sm:h-52 sm:w-32"
        >
          <img
            className="rounded-3xl border-4 border-[rgb(27,3,25)]"
            src={props.image}
            onMouseMove={onHoverHandler}
            alt={props.name}
          />
          <figcaption
              className="absolute m-auto font-black text-red-50 px-3
                        sm:bottom-8 lg:bottom-12 right-2 backdrop-blur-sm backdrop-opacity-80"
              onMouseLeave={onLeaveHandler}
            >
              <div className="sm:text-xl lg:text-3xl font-outline-1-2">{props.name}</div>
            </figcaption>
        </div>

        {/* Back of Card */}
        <Container className="flex flex-col object-contain m-auto p-0">
          <figure
            className="relative grid m-auto place-items-center
                                 lg:h-96 lg:w-60 
                                 sm:h-52 sm:w-32"
          >
            <img
              className="rounded-3xl border-4 border-[rgb(27,3,25)] blur-sm"
              src={props.image}
              onMouseLeave={onLeaveHandler}
              alt={props.name}
            />
            <figcaption
              className="absolute m-auto align-middle text-center font-black text-red-50 px-3"
              onMouseLeave={onLeaveHandler}
            >
              <div className="sm:text-xl lg:text-3xl font-outline-1">{props.name}</div>
              <div className="sm:text-xs lg:text-lg font-outline-0-5">{props.tag}</div>
            </figcaption>
          </figure>
        </Container>
      </ReactCardFlip>
    </div>
  );
};

export default ExcoCard;
