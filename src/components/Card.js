import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="flex flex-col items-center hover:bg-gradient-to-tl from-pink-700 to-red-900 rounded-md">
      <img
        src={item.sprites.other.dream_world.front_default}
              alt="pokemon_photo"
              className="w-[250px] h-[250px] object-contain"
      />
      <h3 className="text-center font-bold text-white">{item.name }</h3>
    </div>
  );
};

export default Card;
