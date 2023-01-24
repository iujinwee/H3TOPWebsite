import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Card from "./Card";

// import classes from './ClanCard.module.css'

const ClanCard = (props) => {
  return (
    // Control Entire Card
    <ParallaxBanner className="min-h-screen">
      <ParallaxBannerLayer image={props.bg} className="blur-sm" speed={0}/>
      <ParallaxBannerLayer className="bg-[rgba(62,14,14,0.41)]" speed={-10} />
      <ParallaxBannerLayer>
        <div className="py-4" id={props.id} key={props.id} />
        <Card className="bg-[rgb(49,7,46)] bg-opacity-60">
          <div
            className="container grid lg:grid-cols-4
                    font-outline-0-5"
          >
            {/* Control size of image */}
            <img
              className="w-60 h-96 object-cover rounded-3xl
                          flex flex-auto justify-center items-center m-auto 
                          rows-start-1 
                          lg:col-start-1"
              src={props.image}
              alt={props.name}
            />

            {/* Control Description */}
            <div
              className="rows-start-2 pt-3
                            lg:col-start-2 lg:col-span-3 lg:pl-8"
            >
              <div
                className="font-bold text-4xl md:text-5xl lg:text-6xl
                                  my-1"
              >
                <span className={`${props.color1}`}>{props.name}</span>
              </div>

              <div
                className="font-semibold text-xl md:text-2xl lg:text-2xl
                        mt-4"
              >
                <span className={`font-bold ${props.color2}`}>Quirk: </span>
                <span className="font-outline-0">{props.quirk}</span>
              </div>

              <div className="font-semibold text-xl md:text-2xl lg:text-2xl">
                <span className={`font-bold ${props.color2}`}>
                  Description:{" "}
                </span>
                <span
                  className="font-semibold text-base md:text-lg lg:text-xl 
                              font-outline-0"
                >
                  {props.desc}
                </span>
              </div>

              <div
                className="text-base md:text-lg lg:text-xl
                        mt-4 mb-0"
              >
                <h1 className="font-bold">Origins</h1>
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
