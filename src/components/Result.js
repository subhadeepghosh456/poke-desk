import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const [info, setInfo] = useState({});
  const [ability, setAbility] = useState("");
  // const [name,setName] = useState('');
  const data = useLocation();
  const [effect, setEffect] = useState("");

  console.log(data.state);

  useEffect(() => {
    getInformation();
  }, [data.state]);

  const getInformation = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${data.state}`
      );
      const json = await res.json();
      setInfo(json);

      setAbility(json?.abilities[0]?.ability?.url);
    } catch (error) {
      console.log(error);
    }
  };

  const getAbilityDetails = async () => {
    try {
      const data = await fetch(ability);
      const json = await data.json();
      console.log(json);
      setEffect(json?.effect_entries[0]?.effect);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(effect);

  useEffect(() => {
    getAbilityDetails();
  });

  // console.log(info);
  // if (Object.keys(info).length === 0) return <h1>No Data found with { data.state}</h1>

  return (
    <>
      {Object.keys(info).length === 0 ? (
        <h1 className="w-full h-[100vh] flex items-center justify-center text-slate-300 font-bold text-2xl">
          😔😭😖😞☹️🥺 No Data found with {data.state} !!
        </h1>
      ) : (
        <div className="w-full h-[100vh] bg-gradient-to-tr from-slate-200 to-purple-950 px-9 py-10 flex flex-col justify-center items-center">
          <div className="w-[30%]">
            <img
              src={info?.sprites?.other?.dream_world?.front_default}
              alt="poke_image"
              className="w-full h-[40vh]"
            />
            <h3 className="text-center text-2xl text-orange-900 font-bold">
              {info.name}
            </h3>
          </div>
          <p className="text-2xl font-extrabold text-gray-700 w-full">
            {effect}
          </p>
        </div>
      )}
    </>
  );
}

export default Result;
