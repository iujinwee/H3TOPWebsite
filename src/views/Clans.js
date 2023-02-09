import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Fade from "../component/Animation/Fade";
import Card from "../component/UI/Card/Card";
import CharacterCard from "../component/UI/Characters/CharacterCard";
import { clans } from "../Content";

import doku from "../images/doku.jpg";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import bg from "../images/background.png";

const Clans = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3,
      },
    },
  };

  const delay = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <ParallaxBanner className="h-[125vh] scale-105">
      <div id="clans" key="clans" className="relative lg:-top-8 sm:-top-64"/>
      <div id="clans_start" key="clans_start" className="relative -top-12"/>
      <ParallaxBannerLayer image={bg} speed={15} />
      <ParallaxBannerLayer
        image={bg}
        speed={20}
        style={{ "background-position-y": "88%"}}
      />
      <ParallaxBannerLayer className="lg:mt-14 sm:mt-2 px-3">
        <Card className="bg-[rgb(22,2,49)] bg-opacity-40 font-blackopsone 
                        px-0 sm:pt-4 pb-1">
          <ul className="list-none px-0 md:px-16 lg:px-32 justify-center m-auto">
            <Fade
              direction="bottom"
              speed="1.5"
              delay="0.2"
              className="font-bold lg:text-5xl sm:text-3xl text-center lg:mb-4 sm:mb-2 font-outline-0-5"
            >
              {clans.opening}
            </Fade>

            <Fade
              direction="bottom"
              speed="1.2"
              delay="0.5"
              className="font-bold lg:text-xl sm:text-xs text-center lg:mb-12 sm:mb-8 font-audiowide font-outline-0-1 px-8"
            >
              {clans.clanCards}
            </Fade>

            <motion.ul
              ref={ref}
              variants={variant}
              initial="hidden"
              animate={control}
              className="select-none list-none pl-0 flex flex-wrap m-auto justify-center"
            >
              {/* Control width */}

              <motion.li variants={delay}>
                <CharacterCard
                  image={doku}
                  name={clans.Akari.name}
                  tag={clans.Akari.quirk}
                  id={clans.Akari.name}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={doku}
                  name={clans.Bankai.name}
                  tag={clans.Bankai.quirk}
                  id={clans.Bankai.name}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={doku}
                  name={clans.Chakra.name}
                  tag={clans.Chakra.quirk}
                  id={clans.Chakra.name}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={doku}
                  name={clans.Doku.name}
                  tag={clans.Doku.quirk}
                  id={clans.Doku.name}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={doku}
                  name={clans.Enji.name}
                  tag={clans.Enji.quirk}
                  id={clans.Enji.name}
                />
              </motion.li>
            </motion.ul>
          </ul>
        </Card>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Clans;
