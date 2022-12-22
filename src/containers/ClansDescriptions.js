import React from 'react'
import Card from '../component/UI/Card/Card'
import ClanCard from '../component/UI/Card/ClanCard'
import { clans } from '../Content'
import doku from '../images/doku.jpg'


const ClansDescriptions = () => {
  return (
    <div>
        <Card id={clans.Akari.name}>
            <ClanCard  
                name={clans.Akari.name}
                quirk={clans.Akari.quirk}
                desc={clans.Akari.quirkdesc}
                story={clans.Akari.story}
                image={doku}
                color1="text-rose-300"
                color2="text-rose-200"
            />
        </Card>

        <Card id={clans.Bankai.name}>
            <ClanCard 
                name={clans.Bankai.name}
                quirk={clans.Bankai.quirk}
                desc={clans.Bankai.quirkdesc}
                story={clans.Bankai.story}
                image={doku}
                color1="text-emerald-300"
                color2="text-emerald-200"
            />
        </Card>

        <Card id={clans.Chakra.name}>
            <ClanCard 
                name={clans.Chakra.name}
                quirk={clans.Chakra.quirk}
                desc={clans.Chakra.quirkdesc}
                story={clans.Chakra.story}
                image={doku}
                color1="text-sky-300"
                color2="text-sky-200"
            />
        </Card>

        <Card id={clans.Doku.name}>
            <ClanCard 
                name={clans.Doku.name}
                quirk={clans.Doku.quirk}
                desc={clans.Doku.quirkdesc}
                story={clans.Doku.story}
                image={doku}
                color1="text-gray-400"
                color2="text-gray-300"
            />
        </Card>

        <Card id={clans.Enji.name}>
            <ClanCard 
                name={clans.Enji.name}
                quirk={clans.Enji.quirk}
                desc={clans.Enji.quirkdesc}
                story={clans.Enji.story}
                image={doku}
                color1="text-gray-900"
                color2="text-gray-700"
            />
        </Card>
    </div>
  )
}

export default ClansDescriptions