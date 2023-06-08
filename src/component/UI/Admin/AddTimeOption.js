import AddTimePrompt from "./AddTimePrompt";
import Button from "../Button/Button";
import React, { useState } from "react";

const AddTimeOption = (props) => {
    const minute = 60 * 1000; // 1min = 60s * 1000ms
    const options = [10, 20, 30, 60, 90, 120];
    const [prompt, setPrompt] = useState(false);

    return (
        <ul className="flex flex-auto justify-center pl-0 mx-auto flex-wrap lg:my-5 sm:my-1">
            {prompt && (
                <AddTimePrompt
                    message={prompt}
                    onContinue={() => {
                        setPrompt(false);
                    }}
                    onExit={props.onExit}
                />
            )}

            {
                options.map(option =>
                    <li key={option}>
                        <Button
                            id=""
                            onClick={(event) => {
                                event.preventDefault();
                                setPrompt(option);
                                props.onAdd(option * minute);
                            }}
                            className="my-2.5 mx-6 sm:h-14 lg:h-16 sm:w-40 lg:w-52
                             bg-[rgb(63,22,32)] bg-opacity-70  text-white
                               border-2 border-black rounded-3xl
                               sm:text-base md:text-lg lg:text-xl font-bold"
                            message={`${option} MINS`}
                        />
                    </li>
                )
            }
        </ul>
    )
}
export default AddTimeOption;