import React from 'react'
import Fade from '../component/Animation/Fade'
import Start from '../component/UI/Button/Start'
import Card from '../component/UI/Card/Card'

import { story } from '../Content'

const Instructions = (props) => {

  const startHandler = () => {
    const element = document.getElementById('visa');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
        <div className='p-0 m-0' id="instructions"/>
        <Fade
            direction="bottom"
            speed="1"
            delay="0"
            className ='pt-20 md:pt-20 lg:pt-16
                        text-2xl leading-10'>
            <Card className="flex flex-col">
                <h1 className='text-amber-200 text-3xl font-bold mb-2 '>{story.Setup}</h1>
                <p className='mb-16'>{story.StoryTwist}</p> 
                <h1 className='text-lime-300 text-3xl font-bold mb-2 '>{story.Objective}</h1>
                <p>{story.ObjectiveContent}</p> 

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

        <div className='h-1/4'/>
    </>
  )
}

export default Instructions