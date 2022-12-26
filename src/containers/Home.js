import React from 'react'
import Begin from '../component/UI/Button/Begin'
import Fade from '../component/Animation/Fade'

import { intro } from '../Content'

const Home = (props) => {

  const startHandler = () => {
    const element = document.getElementById('story');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }


  return (
    <>
      <div
        key="home"
        className='flex flex-col items-center bg-transparent shadow-none mx-auto
                    font-extrabold justify-center text-center
                    text-2xl md:text-2xl lg:text-3xl text-black
                    pt-20 md:pt-16 lg:pt-12
                    font-blackopsone'>
        <Fade 
          direction="left" 
          speed = "1.5"
          delay = "0"
          className="text-4xl md:text-4xl lg:text-5xl 
                     font-sans
                     pb-2">
            {intro.title1}
        </Fade> 

        <Fade 
          direction="right" 
          speed = "1.5"
          delay = "0.5"
          className="text-3xl md:text-3xl lg:text-4xl
                     pb-2">
            {intro.title2}
        </Fade>
        
        <Fade 
          direction="left" 
          speed = "1.5"
          delay = "1">
            {intro.title3}
        </Fade>
      </div>
      
      <Fade
        className='flex flex-col justify-center items-center m-auto pt-10'
        direction="none"
        speed = "1.5"
        delay = "2">
          <Begin
            onClick={startHandler}/>
      </Fade>
      
      <div className='h-1/2'/> 
    </>
  )
}

export default Home