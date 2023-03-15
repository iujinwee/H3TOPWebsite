import React from 'react'
import ClanCard from '../component/UI/Card/ClanCard'
import { clans } from '../Content'

import akari from '../images/OGCards/akari.jpg'
import bankai from '../images/OGCards/bankai.png'
import chakra from '../images/OGCards/chakra.png'
import doku from '../images/OGCards/doku.jpg'
import enji from '../images/OGCards/enji.png'

import akari_bg from  '../images/background.png'
import bankai_bg from '../images/background.png'
import chakra_bg from  '../images/background.png'
import doku_bg from '../images/background.png'
import enji_bg from '../images/background.png'


const ClansDescriptions = () => {

    
    
  return (
    <div key="clan_desc" id="clan_desc">
        <ClanCard  
            id={clans.Akari.name}
            bg={akari_bg}
            blurcolor="bg-[rgba(62,14,14,0.35)]"
            name={clans.Akari.name}
            quirk={clans.Akari.quirk}
            desc={clans.Akari.quirkdesc}
            story={clans.Akari.story}
            image={akari}
            color1="text-rose-300"
            color2="text-rose-200 font-outline-0"
        />

        <ClanCard 
            id={clans.Bankai.name}
            bg={bankai_bg}
            blurcolor="bg-[rgba(36,62,14,0.35)]"
            name={clans.Bankai.name}
            quirk={clans.Bankai.quirk}
            desc={clans.Bankai.quirkdesc}
            story={clans.Bankai.story}
            image={bankai}
            color1="text-emerald-300"
            color2="text-emerald-200 font-outline-0"
        />

        <ClanCard 
            id={clans.Chakra.name}
            bg={chakra_bg}
            blurcolor="bg-[rgba(55,55,100,0.35)]"
            name={clans.Chakra.name}
            quirk={clans.Chakra.quirk}
            desc={clans.Chakra.quirkdesc}
            story={clans.Chakra.story}
            image={chakra}
            color1="text-sky-300"
            color2="text-sky-200 font-outline-0"
        />

        <ClanCard 
            id={clans.Doku.name}
            bg={doku_bg}
            blurcolor="bg-[rgba(30,40,40,0.35)]"
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
            bg={enji_bg}
            blurcolor="bg-[rgba(0,0,0,0.5)]"
            name={clans.Enji.name}
            quirk={clans.Enji.quirk}
            desc={clans.Enji.quirkdesc}
            story={clans.Enji.story}
            image={enji}
            color1="text-white font-outline-0-1-b"
            color2="text-gray-200 font-outline-0-1-b"
        />
    </div>
  )
}

export default ClansDescriptions