import akari_bg from './images/OGCards/akari.jpg'
import bankai_bg from './images/OGCards/bankai.png'
import chakra_bg from './images/OGCards/chakra.png'
import doku_bg from './images/OGCards/doku.jpg'
import enji_bg from './images/OGCards/enji.png'
import main_bg from './images/background.png'

const intro = {
    title1: "Welcome to",
    title2: "Hall of Residence 3",
    title3: "Transition Orientation Programme!", 
    Begin: "Let's Begin"
}

const story = {
    display: true,
    Start: "Start",
    Header: "Storyline",
    MainStory:{
        title: "The year is 2300. Our world is now home to 5 distinct tribes and each tribe is responsible for an aspect required for the society to function:",
        clans: [
            {
                name: "Akari - Medical",
                color: "text-red-300",
            },
            {
                name: "Bankai - Agriculture", 
                color: "text-green-300",
            },
            {
                name: "Chakra - Water",
                color: "text-blue-300"
            },
            {
                name:"Doku - Technology",
                color: "text-slate-400"
            },
            {
                name: "Enji - Military", 
                color: "text-red-400"
            }
        ],
        subtitle: "The tribes are always suspicious of each other as they are concerned that resources are not shared equally amongst citizens. The tribes are at the brink of war as resources have become scarce and each tribe wants to lay claim and colonise every sector to ensure equal distribution.",
        prompt: "One stormy night cuts out the power to the entire city and the tribe leaders are suddenly awoken by the roaring thunder, to realise that all citizens are unconscious. The leaders blame each other for the blackout, suspecting it as a ruse for one tribe to take over the entire city. Terrified, the leaders search the city to find the cause, only to discover a giant eerie announcement illuminating the sky. The night sky was peppered with spades, clubs, hearts and diamonds with the words..."
    },
    MainStoryCont: " “The Game is about to begin!” ",
    Setup: "Game Start! ",
    StoryTwist: "Suddenly getting transported into an unknown universe, a mysterious man behind the screen traps players in his “games”. The players are given “visas” which last for a day, and in order to extend their visa and survive, they have to participate in the games.",
    Objective: "Objective",
    ObjectiveContent: "The objective is to win games and escape this scary alternate reality. In the final stage, the teams need to collaborate with each other in order to get out safely. Throughout the games, they would also need to find out about the identity of the mysterious game master behind this digital screen."
};

const visa = {
    display: true,
    message: "Hurry... Your Visa is expiring!",
    clans: "Learn about your Clan!",
    login_title1: "Warning!",
    login_title2: "Player Authentication Required.",
    login_prompt: "Login to proceed"
};

const team = {
    display: true,
    title: "Our Top 9",
    opening: "Meet our Exco Committee Members!",
    p:{
        name: "Audree",
        tag: "President"
    },
    vp:{
        name: "Eugene",
        tag: "Vice-President"
    },
    cp: {
        name1: "Marco",
        name2: "Adrian",
        tag: "Chief Programmer",
    },
    log: {
        name: "Victoria",
        tag: "Logistics Head"
    },
    fincon: {
        name: "Rovin", 
        tag: "Financial Controller"
    },
    bmag: {
        name: "Jun Jie",
        tag: "Business Manager"
    },
    pnp: {
        name: "Xanthia", 
        tag: "PnP",
    },
    ocgl: {
        name: "Kenji", 
        tag: "OCGL"
    } 
};

const clans = {
    display: true,
    opening: "Our Clans",
    clanCards: "Hover over the cards to view their quirk; Click to find out more about their origins!",
    background: main_bg,
    clanData: [
        {
            id: "akari",
            name: "Akari",
            quirk: "Prideful Curryman",
            quirkDesc: "test",
            story: "Ever since young, Akari has absolutely slayed everything he does. He was the first to finish every single level of candy crush. He has an IQ higher than stephen hawking and albert einstein combined. He can win Connect 4 in 3 moves. He has never lost a scissors-paper-stone match. And of course, he is most proud of his ability to make the best curry (a-kari, get it?) in the world that can get anyone to fall in love with him.",
            image: akari_bg,
            blurColor: "bg-[rgba(62,14,14,0.35)]",
            color1: "text-rose-300",
            color2: "text-rose-200 font-outline-0"
        },
        {
            id: "bankai",
            name: "Bankai",
            quirk: "Descendant of Goku",
            quirkDesc:"test",
            story: "The wild, fearless and mythical beast Bankai is a Japanese kitsune with mind-channelling abilities like Telekinesis. With sharp steel claws and a ring of black fur around its cunning eyes, Bankai’s appearance is certainly daunting and even the slightest glimpse of it in the woods has scared many travellers away. Bankai will stop at nothing to ensure survival, including manipulating his enemies and gaslighting them into doing what he wants. He was also blessed with the ability to breathe fire when he is in a rage, which has burned down entire towns and cities in the past.",
            story2: "Currently, he resides in the kingdom of Borderland, where he has established his dominance and gathered respect from all the civilians. However, his latest threats are the 4 new beasts that have recently entered his kingdom and the land that he reigns - Akari, Chakra, Doku and Enji.",
            story3: "Driven by their hunger for power, they threaten to contest for the throne and gain control over the civilians. One challenge remains for Bankai - will he be able to ensure the loyalty of his people and overthrow his enemies?",
            image: bankai_bg,
            blurColor: "bg-[rgba(36,62,14,0.35)]",
            color1:"text-emerald-300",
            color2:"text-emerald-200 font-outline-0"
        },
        {
            id: "chakra",
            name: "Chakra",
            quirk: "Spirit Dragon",
            quirkDesc: "test",
            story:"No one knows how this being first came into existence. Few who encountered it have lived to tell the tale, and only brief descriptions of the creature exist in legends. It is said to emit so much energy during battles that victims lucky enough to survive an encounter with it have nicknamed the beast “Chakra”.",
            story2:"Legend says that the beast was the main reason dinosaurs went extinct when it first came to Earth, and has since gone into slumber in the deepest part of the Earth’s oceans as it was the only place capable of containing its flames. Ever since the dinosaurs, no living beings which came after have been strong enough to entertain it in battle, so the beast rests in the depths awaiting the day it can finally encounter a challenge again.",
            story3:"In the meantime, he sends out a part of his spirit with all attributes maxed during character selection to walk the Earth in search of his next challenger.",
            image: chakra_bg,
            blurColor: "bg-[rgba(55,55,100,0.35)]",
            color1:"text-sky-300",
            color2:"text-sky-200 font-outline-0"
        },
        {
            id: "doku",
            name: "Doku",
            quirk: "Venomous Snake",
            quirkDesc: "test",
            story: "Our character is named “Doku” which means poisonous in Japanese. We decided to name our character, “Doku”, as it is fierce, reckless and a formidable force, just like the characters in “Alice in Borderland”.",
            story2: "“Doku” is a powerful character that is ever-ready to overcome challenges with the snap of a finger. Using its poison and quick-thinking skills, its enemies simply stand no chance of surviving against “Doku”.",
            story3: "In addition, the poker card that ties in with our character is symbolic of the risks “Doku” is ready to take in order to gain victory and it ties in well to the idea of poker cards used in the series “Alice In Borderland”.",
            image: doku_bg,
            blurColor: "bg-[rgba(30,40,40,0.35)]",
            color1:"text-gray-400",
            color2:"text-gray-300 font-outline-0"
        },
        {
            id: "enji",
            name: "Enji",
            quirk: "Vengeful Samurai",
            quirkDesc: "test",
            story: "Enji was nurtured in the highlands by his father, Injuto. On one dreadful night, his tribe was attacked, and Enji saw his father murdered right in front of his eyes. Enji was fortunate to avoid death, but the flashbacks of his father's death haunts him to this day. Enji swore vengeance and vowed to eliminate anybody who stood in his way. Enji is portrayed as a greedy, egotistical man who takes satisfaction in being 'in charge' behind the scenes. He believes in the art of hypnosis and revels in the fact that he can control and manipulate players to his liking in the Borderlands. He was well aware that Akari, Banzen Chakra, and Doku were his main adversaries and is determined to kill all of them. Will Enji succeed in getting revenge for his father?",
            image: enji_bg,
            blurColor: "bg-[rgba(0,0,0,0.5)]",
            color1:"text-white font-outline-0-1-b",
            color2:"text-gray-200 font-outline-0-1-b"
        }
    ]
}

const gameplay = {
    scanQR: "Scan this QR Code to Extend your Visa!",
    adminQR: "Scan to Extend Player's Visa"
}


export {
    intro,
    story,
    visa, 
    clans,
    team,
    gameplay
}