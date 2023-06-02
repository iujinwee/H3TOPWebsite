import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";


const ClanCard = (props) => {
  return (
    // Control Entire Card
    <ParallaxBanner className="h-screen font-audiowide">
      <ParallaxBannerLayer
        image={props.bg}
        className="blur-sm"
        style={{ 'backgroundSize': "cover",
                'margin': '-6px -6px -6px -6px',
                'backgroundRepeat': 'no-repeat' }}
        speed={0}
      />
      <ParallaxBannerLayer className={props.blurcolor} />
      <ParallaxBannerLayer className="h-screen overflow-auto mt-7 py-4">
        <Card className="bg-[rgb(34,34,35)] bg-opacity-30 px-3">
          <div
            className="container grid lg:grid-cols-4"
          >
            {/* Control size of image */}
            <img
              className="sm:w-44 sm:rounded-lg lg:rounded-2xl
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
              <Link to="/clans">
                <FontAwesomeIcon 
                  icon={solid("right-from-bracket")}
                  beat
                  className="z-20
                    h-7 hover:scale-110 text-white 
                    absolute sm:top-20 sm:right-8 lg:top-28 lg:right-64"
              />
              </Link>
              
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
                className="sm:text-[13px] md:text-lg lg:text-base
                           lg:mt-4 sm:mt-4 lg:mb-0"
              >
                <h1 className={`text-2xl font-blackopsone pb-2`}>Origins</h1>
                <span
                  className="flex flex-wrap lg:pr-10 sm:-tracking-wide lg:tracking-wider 
                    sm:leading-loose lg:leading-relaxed border-2">
                  <span className="p-3">
                    {props.story}
                  </span>
                  {
                    props.story2 && 
                    <span className="p-3">
                      {props.story2}
                    </span>
                  }
                  {
                    props.story3 && 
                    <span className="p-3">
                      {props.story3}
                    </span>
                  }
                </span>
              </div>
            </div>
          </div>
        </Card>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default ClanCard;
