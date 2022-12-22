import React from 'react'
import Button from '../component/UI/Button/Button'
import Fade from '../component/Animation/Fade'

import { intro } from '../Content'

const Home = (props) => {

  return (
    <>
      <div
        className='flex flex-col items-center bg-transparent shadow-none m-auto
                    font-extrabold whitespace-nowrap 
                    text-xl md:text-2xl lg:text-3xl text-black
                    pt-20 md:pt-16 lg:pt-12'>
        <Fade 
          direction="left" 
          speed = "1.5"
          delay = "0"
          className="text-3xl md:text-4xl lg:text-5xl">
            {intro.title1}
        </Fade> 

        <Fade 
          direction="right" 
          speed = "1.5"
          delay = "0.5"
          className="text-2xl md:text-3xl lg:text-4xl">
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
          <Button
            id="story"
            className='select-none bg-purple-700 bg-opacity-80 
                      rounded-2xl border-solid border-purple-300 border-2 
                      hover:border-double hover:border-purple-500
                      text-xl font-semibold 
                      h-16 w-40 mx-auto mt-32'
            message={intro.Begin}/>
      </Fade>
      
      <div className='h-screen'/> 
    </>
  )
}

export default Home