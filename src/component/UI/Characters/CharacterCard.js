import { React, useState } from "react";
import { Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

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

  const clickHandler = () => {
    const element = document.getElementById(props.id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    //  ${classes.card} ${props.className} > If want to inherit card

    // Adjusting padding between cards
    <div
      className="flex flex-col
                    px-6 pb-5 "
    >
      <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
        {/* Front of Card */}
        <img
          className="rounded-3xl h-96 w-60 m-auto"
          src={props.image}
          onMouseMove={onHoverHandler}
          onClick={clickHandler}
          alt={props.name}
        />

        {/* Back of Card */}
        <Container className="flex flex-col object-contain m-auto p-0">
          <figure className="relative h-96 w-60 m-auto">
            <img
              className="rounded-3xl"
              src={props.image}
              onMouseLeave={onLeaveHandler}
              onClick={clickHandler}
              alt={props.name}
            />
            <figcaption
              className="absolute h-96 w-60 rounded-3xl top-0 mx-auto px-5 pt-40
                                       backdrop-blur-xl backdrop-opacity-90
                                     text-black text-2xl text-center font-bold"
              onMouseLeave={onLeaveHandler}
              onClick={clickHandler}
            >
              {props.tag}
            </figcaption>
          </figure>
        </Container>
      </ReactCardFlip>
    </div>
  );
};

export default CharacterCard;
