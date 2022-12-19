import {React, useState} from 'react'
import CharacterCard from '../component/UI/Characters/CharacterCard'
import doku from '../images/doku.jpg'
import Card from '../component/UI/Card/Card'
import { ogcard } from '../Content'

const Clans = (props) => {

  return (
    <div className="pt-80 lg:pt-16" id="clans">
      <Card className='overflow-hidden'>
        <ul className='list-none px-0 md:px-16 lg:px-32'>

          <div className='font-bold text-5xl text-center
                          mb-4'>Our Clans</div>

          <p className='font-bold text-xl text-center 
                          mb-5'>Hover over the cards to view their quirk; Click to find out more about their origins!</p>

          <ul className='list-none pl-0 flex flex-wrap m-auto '>
            <CharacterCard image={doku} name="Akari" tag={ogcard.Akari}/>
            <CharacterCard image={doku} name="Bankai" tag={ogcard.Bankai}/>
            <CharacterCard image={doku} name="Chakra" tag={ogcard.Chakra}/>
            <CharacterCard image={doku} name="Doku" tag={ogcard.Doku}/>
            <CharacterCard image={doku} name="Enji" tag={ogcard.Enji}/>
          </ul>
        </ul>
      </Card>
    </div>
  )
}

export default Clans