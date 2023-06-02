import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { clans } from "../Content";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Fade from "../component/Animation/Fade";
import Card from "../component/UI/Card/Card";
import CharacterCard from "../component/UI/Characters/CharacterCard";

const Clans = () => {
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

  const bg = clans.background
  const akari = clans.clanData.find(clan => clan.id === "akari")
  const bankai = clans.clanData.find(clan => clan.id === "bankai")
  const chakra = clans.clanData.find(clan => clan.id === "chakra")
  const doku = clans.clanData.find(clan => clan.id === "doku")
  const enji = clans.clanData.find(clan => clan.id === "enji")

  return (
    <ParallaxBanner className="h-screen">
      <ParallaxBannerLayer
        image={bg}
      />
      <ParallaxBannerLayer className="h-screen overflow-auto lg:mt-40 sm:mt-16 px-3 pb-12">
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
              className="font-bold lg:text-xl sm:text-[13px] text-center lg:mb-12 sm:mb-8 font-audiowide font-outline-0-1 px-8"
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
                  image={akari.image}
                  name={akari.name}
                  tag={akari.quirk}
                  id={akari.id}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={bankai.image}
                  name={bankai.name}
                  tag={bankai.quirk}
                  id={bankai.id}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={chakra.image}
                  name={chakra.name}
                  tag={chakra.quirk}
                  id={chakra.id}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  image={doku.image}
                  name={doku.name}
                  tag={doku.quirk}
                  id={doku.id}
                />
              </motion.li>

              <motion.li variants={delay}>
                <CharacterCard
                  className="scale-105"
                  image={enji.image}
                  name={enji.name}
                  tag={enji.quirk}
                  id={enji.id}
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
