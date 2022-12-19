import React from 'react'
import Card from '../component/UI/Card/Card'
import Button from '../component/UI/Button'

const Home = (props) => {
  return (
    <div className="p-5">
      <Card className='flex flex-col items-center bg-transparent shadow-none m-auto
                      font-bold whitespace-nowrap text-2xl md:text-3xl lg:text-4xl text-black'>
        <div className="text-3xl md:text-4xl lg:text-5xl">Welcome to</div> 
        <div>Hall of Residence 3</div>
        <div>Transition Orientation Programme!</div>
      </Card>
      
      <Card className='h-screen w-screen bg-transparent shadow-none mx-auto mt-0 p-0'>
        {/* <Card className='grid bg-transparent shadow-none p-0 mx-auto'> */}
          <Button>Begin</Button>
        {/* </Card> */}
      </Card>
    </div>
  )
}

export default Home