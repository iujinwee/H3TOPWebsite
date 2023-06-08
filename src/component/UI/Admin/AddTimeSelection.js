import React, { useState } from "react";
import AddTimeEvent from "./AddTimeEvent";
import AddTimeOption from "./AddTimeOption";

const AddTimeSelection = (props) => {
  const [selectedEvent, setEvent] = useState(false);
  const [context, setContext] = useState("event");

  return (
    <React.Fragment>
        {context === "event" ?
            <AddTimeEvent onClick={(selectedEvent) => {
                setContext("timer");
                setEvent(selectedEvent)
            }}/>
            :
            <div>
              <div className="mt-4 sm:text-base lg:text-xl mb-2">
              Select Amount of Time To Add.
              </div>
              <AddTimeOption
                  selectedEvent = {selectedEvent}
                  onAdd={(time)=> {
                    props.onAdd(time, selectedEvent)
                  }}
                  onExit={() => props.onExit()}
              />
        </div>
        }
    </React.Fragment>
  );
};

export default AddTimeSelection;
