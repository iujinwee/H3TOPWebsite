import React from 'react'
import ClanCard from '../component/UI/Card/ClanCard'
import { clans } from '../Content'
import { useParams } from 'react-router-dom'


const ClansDescriptions = () => {
    const { id } = useParams();
    const clanData = clans.clanData.find(card => card.id === id);

    return (
        <ClanCard  
            id={clanData.id}
            name={clanData.name}
            quirk={clanData.quirk}
            desc={clanData.quirkDesc}
            story={clanData.story}
            story2={clanData.story2}
            story3={clanData.story3}
            image={clanData.image}
            bg={clans.background}
            blurcolor={clanData.blurColor}
            color1={clanData.color1}
            color2={clanData.color2}
        />
    )
}

export default ClansDescriptions