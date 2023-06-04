import { ParallaxBannerLayer } from "react-scroll-parallax"
import bg from '../images/background.png'
import Board from "../component/UI/Board/Board"

const Leaderboard = () => {
  return (
    <ParallaxBannerLayer className="h-screen">
      <ParallaxBannerLayer
        image={bg}
      />
      <ParallaxBannerLayer>
        <Board/>
      </ParallaxBannerLayer>
    </ParallaxBannerLayer>
  )
}

export default Leaderboard