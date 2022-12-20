import React from 'react'
import Card from '../component/UI/Card/Card'
import { story } from '../Content.js'
import BottomFade from '../component/Animation/BottomFade'

const Story = () => {


  return (
    <BottomFade
      className ='pt-20 md:pt-20 lg:pt-16
                  text-2xl leading-10' 
      id="story"> 
        <Card>
          <div>
            <h1 className='text-amber-50 text-3xl font-bold mb-2'>{story.Header}</h1>
            <p>{story.MainStory}</p>
            <h2 className='text-red-200 text-center text-4xl font-bold mt-5'>{story.MainStoryCont}</h2>
            
          </div>
          
        </Card>

        <Card className="flex flex-col">
          <h1 className='text-amber-50 text-3xl font-bold mb-2 '>{story.Setup}</h1>
          <p className='mb-20'>{story.StoryTwist}</p> 
          <h1 className='text-amber-50 text-3xl font-bold mb-2 '>{story.Objective}</h1>
          <p>{story.ObjectiveContent}</p> 
        </Card>
    </BottomFade>
  )
}

export default Story