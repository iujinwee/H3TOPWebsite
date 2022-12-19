import React from 'react'
import Card from '../component/UI/Card/Card'
import {story} from '../Content.js'


const Story = () => {
  return (
    <div className='pt-80 lg:pt-16' id="story"> 
      <div className='text-2xl leading-10'>
        <Card>
          <div>
            <h1 className='text-amber-50 text-3xl font-bold mb-2 '>{story.Header}</h1>
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
      </div> 
    </div>
  )
}

export default Story