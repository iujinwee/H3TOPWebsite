import { ParallaxBannerLayer } from "react-scroll-parallax"
import bg from '../images/background.png'
import Board from "../component/UI/Board/Board"

const Leaderboard = () => {
  return (
    <ParallaxBannerLayer className="h-screen w-screen">
      <ParallaxBannerLayer
        image={bg}
      />
      <ParallaxBannerLayer 
        className="h-screen overflow-auto 
          flex justify-center items-center text-center
          mx-4">  
        <Board/>
      </ParallaxBannerLayer>
    </ParallaxBannerLayer>
  )
}

export default Leaderboard