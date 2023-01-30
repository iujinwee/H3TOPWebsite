import { transform } from "framer-motion";
import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Card from "./Card";

// import classes from './ClanCard.module.css'

const ClanCard = (props) => {
  return (
    // Control Entire Card
    <ParallaxBanner className="h-screen">
      <ParallaxBannerLayer
        image={props.bg}
        className="blur-sm"
        style={{ 'backgroundSize': "180%",
                'transform': 'scale(1.4, 1.4)',
                'margin': '-6px -6px -6px -6px',
                'backgroundRepeat': 'no-repeat' }}
        speed={10}
      />
      <ParallaxBannerLayer className={props.blurcolor} />
      <ParallaxBannerLayer>
        <div className="lg:py-4 sm:py-0" id={props.id} key={props.id} />
        <Card className="bg-[rgb(25,1,25)] bg-opacity-60 px-3 py-4">
          <div
            className="container grid lg:grid-cols-4
                    font-outline-0-5"
          >
            {/* Control size of image */}
            <img
              className="lg:w-60 lg:h-96 sm:h-44 sm:w-28 sm:rounded-2xl lg:rounded-3xl
                          flex flex-auto justify-center items-center m-auto 
                          rows-start-1 object-cover
                          lg:col-start-1"
              src={props.image}
              alt={props.name}
            />

            {/* Control Description */}
            <div
              className="rows-start-2 pt-3
                        lg:col-start-2 lg:col-span-3 lg:pl-8"
            >
              <div className="font-bold sm:text-3xl md:text-5xl lg:text-6xl">
                <span className={`${props.color1}`}>{props.name}</span>
              </div>

              <div className="font-semibold sm:text-lg md:text-2xl lg:text-2xl lg:mt-4 sm:mt-2">
                <span className={`font-bold ${props.color2}`}>Quirk: </span>
                <span className="font-outline-0">{props.quirk}</span>
              </div>

              <div className="font-semibold sm:text-lg md:text-2xl lg:text-2xl">
                <span className={`font-bold ${props.color2}`}>
                  Description:{" "}
                </span>
                <span
                  className="font-semibold sm:text-lg md:text-lg lg:text-xl 
                              font-outline-0"
                >
                  {props.desc}
                </span>
              </div>

              <div
                className="text-sm md:text-lg lg:text-xl
                           lg:mt-4 sm:mt-4 lg:mb-0"
              >
                <h1 className="text-2xl font-bold">Origins</h1>
                <span className="flex flex-wrap">{props.story}</span>
              </div>
            </div>
          </div>
        </Card>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default ClanCard;
