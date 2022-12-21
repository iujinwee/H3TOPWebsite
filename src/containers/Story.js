import React, { useState } from 'react'
import Card from '../component/UI/Card/Card'
import { story } from '../Content.js'
import Fade from '../component/Animation/Fade'

const Story = () => {

  const [startGame, setStartGame] = useState(false);

  const startHandler = () => {
    setStartGame(true);
  }

  return (
    <>
      <div className='p-0 m-0' id="story"/>
      <Fade
        direction="bottom"
        speed="1"
        delay="0"
        className ='pt-20 md:pt-20 lg:pt-16
                    text-2xl leading-10' 
        > 
          <Card>
            <div>
              <h1 className='text-amber-50 text-3xl font-bold mb-2'>{story.Header}</h1>
              <p>{story.MainStory}</p>
              <button className='flex flex-col items-center justify-center mx-auto mt-5
                               text-red-200 text-4xl font-bold'
                      onClick={startHandler}>{story.MainStoryCont}</button>
            </div>
          </Card>

          {startGame && <Fade
            direction="bottom"
            speed="1"
            delay="0">
              <Card className="flex flex-col" id="objective">
                <h1 className='text-amber-200 text-3xl font-bold mb-2 '>{story.Setup}</h1>
                <p className='mb-20'>{story.StoryTwist}</p> 
                <h1 className='text-lime-300 text-3xl font-bold mb-2 '>{story.Objective}</h1>
                <p>{story.ObjectiveContent}</p> 
              </Card>
            </Fade>}

        </Fade>
    </>
  )
}

export default Story