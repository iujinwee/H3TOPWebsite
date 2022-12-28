import React from 'react'
import ClanCard from '../component/UI/Card/ClanCard'
import { clans } from '../Content'
import doku from '../images/doku.jpg'


const ClansDescriptions = () => {
  return (
    <div key="clan_desc" id="clan_desc" className=''>
        <ClanCard  
            id={clans.Akari.name}
            name={clans.Akari.name}
            quirk={clans.Akari.quirk}
            desc={clans.Akari.quirkdesc}
            story={clans.Akari.story}
            image={doku}
            color1="text-rose-300"
            color2="text-rose-200 font-outline-0"
        />

        <ClanCard 
            id={clans.Bankai.name}
            name={clans.Bankai.name}
            quirk={clans.Bankai.quirk}
            desc={clans.Bankai.quirkdesc}
            story={clans.Bankai.story}
            image={doku}
            color1="text-emerald-300"
            color2="text-emerald-200 font-outline-0"
        />

        <ClanCard 
            id={clans.Chakra.name}
            name={clans.Chakra.name}
            quirk={clans.Chakra.quirk}
            desc={clans.Chakra.quirkdesc}
            story={clans.Chakra.story}
            image={doku}
            color1="text-sky-300"
            color2="text-sky-200 font-outline-0"
        />

        <ClanCard 
            id={clans.Doku.name}
            name={clans.Doku.name}
            quirk={clans.Doku.quirk}
            desc={clans.Doku.quirkdesc}
            story={clans.Doku.story}
            image={doku}
            color1="text-gray-400"
            color2="text-gray-300 font-outline-0"
        />

        <ClanCard 
            id={clans.Enji.name}
            name={clans.Enji.name}
            quirk={clans.Enji.quirk}
            desc={clans.Enji.quirkdesc}
            story={clans.Enji.story}
            image={doku}
            color1="text-gray-900 font-outline-0-1-w"
            color2="text-gray-700 font-outline-0-1-w"
        />
    </div>
  )
}

export default ClansDescriptions