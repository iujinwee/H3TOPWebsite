import { ParallaxBannerLayer } from "react-scroll-parallax"
import bg from '../images/background.png'
import Board from "../component/UI/Board/Board"
import NeonButton from "../component/UI/Button/NeonButton";

const Leaderboard = () => {
  return (
    <ParallaxBannerLayer className="h-screen w-screen">
      <ParallaxBannerLayer
        image={bg}
      />
      <ParallaxBannerLayer
        className="
            font-blackopsone text-center
            mt-40 mx-4">
        <h1
            className="mb-8 items-center
            tracking-[4px] lg:text-4xl sm:text-3xl
            text-white">
                LEADERBOARD
        </h1>
        <Board/>
          <div className="mt-4">

        <NeonButton clas
            >
            May the best OG win!
        </NeonButton>
          </div>
          <p
              className="mt-3 items-center
            tracking-widest lg:text-xl sm:text-[8px]
            text-white">
              Mystery Challenges await you...
          </p>
      </ParallaxBannerLayer>
    </ParallaxBannerLayer>
  )
}

export default Leaderboard