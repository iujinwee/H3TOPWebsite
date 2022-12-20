import {React} from 'react'
import CharacterCard from '../component/UI/Characters/CharacterCard'
import doku from '../images/doku.jpg'
import Card from '../component/UI/Card/Card'
import { ogcard } from '../Content'
import Fade from '../component/Animation/Fade'

const Clans = (props) => {

  return (  
    <div className="pt-20 lg:pt-16" id="clans">
      <Card className='overflow-hidden'>
        <ul className='list-none px-0 md:px-16 lg:px-32'>

          <Fade 
            direction = "bottom"
            speed="1.5"
            delay="0.2"
            className='font-bold text-5xl text-center
                          mb-4'>Our Clans</Fade>

          <Fade 
            direction="bottom"
            speed="1.2"
            delay="0.5"
            className='font-bold text-xl text-center mb-5'>
              Hover over the cards to view their quirk; Click to find out more about their origins!
          </Fade>

          <ul className='list-none pl-0 flex flex-wrap m-auto '>
            <CharacterCard delay="1" image={doku} name="Akari" tag={ogcard.Akari}/>
            <CharacterCard delay="1.5" image={doku} name="Bankai" tag={ogcard.Bankai}/>
            <CharacterCard delay="2" image={doku} name="Chakra" tag={ogcard.Chakra}/>
            <CharacterCard delay="2.5" image={doku} name="Doku" tag={ogcard.Doku}/>
            <CharacterCard delay="3" image={doku} name="Enji" tag={ogcard.Enji}/>
          </ul>
        </ul>
      </Card>
    </div>
  )
}

export default Clans