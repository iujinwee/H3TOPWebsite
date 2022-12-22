import React from 'react'
import Card from '../component/UI/Card/Card'
import ClanCard from '../component/UI/Card/ClanCard'
import { clans } from '../Content'
import doku from '../images/doku.jpg'


const ClansDescriptions = () => {
  return (
    <div>
        <Card>
            <ClanCard 
                name={clans.Akari.name}
                quirk={clans.Akari.quirk}
                story={clans.Akari.story}
                image={doku}
            />
        </Card>
    </div>
  )
}

export default ClansDescriptions