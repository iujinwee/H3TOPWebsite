import React from "react";
// import classes from './ClanCard.module.css'

const ClanCard = (props) => {
  return (
    // Control Entire Card
    <div
      id={props.id}
      className="container m-auto grid  
                lg:container lg:m-auto lg:grid lg:grid-cols-4"
    >
      {/* Control size of image */}
      <img className="w-60 h-96 object-cover rounded-3xl
                      flex flex-auto justify-center items-center m-auto 
                      rows-start-1 
                      lg:col-start-1" src={props.image} alt={props.name}/>

      {/* Control Description */}
      <div className="rows-start-2 pt-8
                      lg:col-start-2 lg:col-span-3 lg:pl-8">
        <div
          className="font-bold text-4xl md:text-5xl lg:text-6xl
                            my-1"
        >
          <span className={`${props.color1}`}>{props.name}</span>
        </div>

        <div
          className="font-semibold text-xl md:text-2xl lg:text-2xl
                     mt-4"
        >
          <span className={`font-bold ${props.color2}`} >Quirk: </span>
          <span>{props.quirk}</span>
        </div>

        <div
          className="font-semibold text-xl md:text-2xl lg:text-2xl"
        >
          <span className={`font-bold ${props.color2}`}>Description: </span>
          <span>{props.desc}</span>
        </div>

        <div
          className="text-lg md:text-xl lg:text-2xl
                     mt-4 mb-0"
        >
          <h1 className="font-bold">Origins</h1>
          <span className="flex flex-wrap">{props.story}</span>
        </div>
      </div>
    </div>
  );
};

export default ClanCard;
