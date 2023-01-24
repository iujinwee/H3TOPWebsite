import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Fade from '../component/Animation/Fade'
import Start from '../component/UI/Button/Start'
import Card from '../component/UI/Card/Card'

import { story } from '../Content'
import bg from '../images/neon_bg.jpg'

const Instructions = (props) => {

  const startHandler = () => {
    const element = document.getElementById('login_start');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image={bg} speed={0} style={{"background-position-y":"50%", "@media (max-width: 768px) backgroundSize": "93%"}}/>
        <ParallaxBannerLayer>
        <div className='relative -inset-y-12 m-0' id="instructions" key="instructions"/>
        <Fade
            direction="bottom"
            speed="1"
            delay="0"
            className ='text-2xl leading-10 font-audiowide lg:pt-8 sm:pt-20 '>
            <Card className="flex flex-col bg-[rgba(73,15,69,0)] bg-opacity-60">

                <h1 className='text-amber-200 text-3xl font-bold mb-2 sm:text-2xl'>{story.Setup}</h1>
                <p className='lg:mb-16 sm:mb-8
                              text-xl lg:text-xl sm:text-sm
                              sm:tracking-tighter lg:tracking-normal sm:leading-relaxed lg:leading-loose'>{story.StoryTwist}</p> 

                <h1 className='text-lime-300 text-3xl font-bold mb-2 sm:text-2xl'>{story.Objective}</h1>
                <p className='text-xl lg:text-xl sm:text-sm
                              tracking-tighter lg:tracking-wider sm:leading-relaxed lg:leading-loose'>{story.ObjectiveContent}</p> 

                <Start 
                  onClick={startHandler}/>
                  {/* className='select-none bg-purple-700 bg-opacity-80 
                  rounded-2xl border-solid border-purple-300 border-2 
                  hover:border-double hover:border-purple-500
                  text-3xl font-bold 
                  mx-auto mt-3 px-5 py-3'
                  message={story.Start}/> */}
            </Card>  
        </Fade>
      </ParallaxBannerLayer></ParallaxBanner>
    </>
  )
}

export default Instructions