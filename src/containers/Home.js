import React from 'react'
import Card from '../component/UI/Card/Card'
import Button from '../component/UI/Button'

const Home = (props) => {
  return (
    <div className="p-5" id="home">
      <Card className='flex flex-col items-center bg-transparent shadow-none m-auto
                      font-bold xs:text-xl sm:text-2xl lg:text-4xl text-black'>
        <div className="xs:text-3xl sm:text-4xl lg:text-5xl">Welcome to</div> 
        <div>Hall of Residence 3</div>
        <div>Transition Orientation Programme!</div>
      </Card>
      
      <Card className='h-screen w-screen bg-transparent shadow-none mx-auto my-0 p-0'>
        {/* <Card className='grid bg-transparent shadow-none p-0 mx-auto'> */}
          <Button>Begin</Button>
        {/* </Card> */}
      </Card>
    </div>
  )
}

export default Home