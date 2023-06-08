import Button from "../Button/Button";
import React from "react";

const AddTimeEvent = (props) => {
    const games = ["Amazing Race", "Monster Hunt", "War of Hall 3", "Side Quests"];
    return(
        <ul className="flex flex-auto justify-center pl-0 mx-auto flex-wrap lg:my-5 sm:my-1">
            {
                games.map((game) => {
                    return (
                        <li key={game}>
                            <Button
                                onClick={() =>
                                    props.onClick(game)
                                }
                                className="my-2.5 mx-6 sm:h-14 lg:h-16 sm:w-48 lg:w-52
                     bg-[rgb(63,22,32)] bg-opacity-70  text-white
                       border-2 border-black rounded-2xl
                       sm:text-base md:text-lg lg:text-xl font-bold"
                                message={ game }
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default AddTimeEvent