import React from 'react'
// import classes from './ClanCard.module.css'

const ClanCard = (props) => {
  return (

    // Control Entire Card
    <div className='flex flex-row items-left justify-left ml-24'>

        {/* Control size of image */}
        <img 
            className='w-44 h-72 object-cover rounded-3xl'
            src={props.image}/>

        {/* Control Description */}
        <div className='flex flex-col p-5'>

            <div className='font-bold text-5xl'>
                <span>Name: </span>
                <span>{props.name}</span>
            </div>

            <div>
                <span>Quirk: </span>
                <span>{props.quirk}</span>
            </div>

            <div>
                <h1>Story: </h1>
                <span>{props.story}</span>
            </div>
        </div>
    </div>
  )
}

export default ClanCard