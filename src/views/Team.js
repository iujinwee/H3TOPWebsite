import { React, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Card from "../component/UI/Card/Card";
import Fade from "../component/Animation/Fade";
import ExcoCard from "../component/UI/ExcoCard/ExcoCard";
import { team } from "../Content";

import audree from "../images/ExcoCards/audree.JPG";
import eugene from "../images/ExcoCards/eugene.JPG";
import cjj from "../images/ExcoCards/cjj.JPG";
import adrian from "../images/ExcoCards/adrian.JPG";
import xanthia from "../images/ExcoCards/xanthia.JPG";
import marco from "../images/ExcoCards/marco.JPG";
import rovin from "../images/ExcoCards/rovin.JPG";
import kenji from "../images/ExcoCards/kenji.JPG";
import victoria from "../images/ExcoCards/victoria.JPG";

const Team = (props) => {
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
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
    // } else{
    //   control.start("hidden")
    // }
  }, [control, inView]);

  return (
    <>
      <div className="relative lg:-top-16 sm:-top-64" id="team" key="team" />
      <div className="bg-main-bg bg-center bg-cover bg-no-repeat select-none overflow-x-auto">
        <Card className="overflow-hidden bg-[rgba(48,48,48,0)] bg-opacity-60 font-blackopsone">
          <ul className="list-none px-0 sm:px-4 md:px-16 lg:px-32">
            <Fade
              direction="bottom"
              speed="1.5"
              delay="0.2"
              hidden="true"
              className="font-bold text-5xl text-center mb-3 mt-3 font-outline-0-5"
            >
              {team.title}
            </Fade>

            <Fade
              direction="bottom"
              speed="1.2"
              delay="0.5"
              hidden="true"
              className="font-bold text-2xl text-center mb-4 font-outline-0-5"
            >
              {team.opening}
            </Fade>

            <motion.ul
              ref={ref}
              variants={variant}
              initial="hidden"
              animate={control}
              className="list-none pl-0 flex flex-wrap m-auto justify-center"
            >
              <motion.li variants={delay}>
                <ExcoCard image={audree} name={team.p.name} tag={team.p.tag} />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={eugene}
                  name={team.vp.name}
                  tag={team.vp.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={marco}
                  name={team.cp.name1}
                  tag={team.cp.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={adrian}
                  name={team.cp.name2}
                  tag={team.cp.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={kenji}
                  name={team.ocgl.name}
                  tag={team.ocgl.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={xanthia}
                  name={team.pnp.name}
                  tag={team.pnp.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={victoria}
                  name={team.log.name}
                  tag={team.log.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={cjj}
                  name={team.bmag.name}
                  tag={team.bmag.tag}
                />
              </motion.li>

              <motion.li variants={delay}>
                <ExcoCard
                  image={rovin}
                  name={team.fincon.name}
                  tag={team.fincon.tag}
                />
              </motion.li>
            </motion.ul>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default Team;
