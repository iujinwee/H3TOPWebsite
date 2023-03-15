import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Card from "./Card";

// import classes from './ClanCard.module.css'

const ClanCard = (props) => {
  return (
    // Control Entire Card
    <ParallaxBanner className="sm:h-[135vh] lg:h-[100vh] font-audiowide">
      <ParallaxBannerLayer
        image={props.bg}
        className="blur-sm"
        style={{ 'backgroundSize': "cover",
                'margin': '-6px -6px -6px -6px',
                'backgroundRepeat': 'no-repeat' }}
        speed={0}
      />
      <ParallaxBannerLayer className={props.blurcolor} />
      <ParallaxBannerLayer>
        <div className="relative -top-16 lg:py-4 sm:py-0" id={props.id} key={props.id} />
        <Card className="bg-[rgb(34,34,35)] bg-opacity-30 px-3 py-4">
          <div
            className="container grid lg:grid-cols-4"
          >
            {/* Control size of image */}
            <img
              className="lg:w-70 lg:h-96 sm:h-[52] sm:w-32 sm:rounded-lg lg:rounded-2xl
                          flex flex-auto justify-center items-center m-auto select-none
                          rows-start-1 object-cover
                          lg:col-start-1"
              src={props.image}
              alt={props.name}
            />

            {/* Control Description */}
            <div
              className="rows-start-2 pt-3
                        lg:col-start-2 lg:col-span-3 lg:pl-8 leading-loose"
            >
              <div className="font-bold sm:text-4xl md:text-5xl lg:text-6xl font-blackopsone font-outline-0-1">
                <span className={`${props.color1}`}>{props.name}</span>
              </div>

              <div className="font-semibold sm:text-base md:text-xl lg:text-xl lg:mt-4 sm:mt-2">
                <span className={`font-bold ${props.color2}`}>Quirk: </span>
                <span className="font-outline-0">{props.quirk}</span>
              </div>

              <div className="font-semibold sm:text-base md:text-xl lg:text-xl">
                <span className={`font-bold ${props.color2}`}>
                  Description:{" "}
                </span>
                <span
                  className="font-semibold sm:text-lg md:text-base lg:text-lg"
                >
                  {props.desc}
                </span>
              </div>

              <div
                className="sm:text-xs md:text-lg lg:text-base
                           lg:mt-4 sm:mt-4 lg:mb-0"
              >
                <h1 className="text-2xl font-blackopsone">Origins</h1>
                <span className="flex flex-wrap lg:pr-10 sm:-tracking-normal lg:tracking-wider leading-relaxed">{props.story}</span>
              </div>
            </div>
          </div>
        </Card>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default ClanCard;
