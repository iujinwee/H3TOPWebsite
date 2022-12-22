import React from 'react'
import Card from '../component/UI/Card/Card'
import { story } from '../Content.js'
import Fade from '../component/Animation/Fade'
import Billboard from '../component/UI/Button/Billboard'

const Story = () => {


  const startHandler = () => {
    
    const element = document.getElementById('instructions');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              <Billboard 
                  onClick={startHandler}/>
            </div>
          </Card>

        </Fade>
    </>
  )
}

export default Story