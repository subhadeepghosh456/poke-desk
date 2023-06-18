import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Body() {
  // const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timmer = setTimeout(() => { get_Data() }, 10)
    return ()=> clearTimeout(timmer)
    
  }, [page]);

  const get_Data = async () => {
    const response = await fetch(loadPoke);
    const result = await response.json();
    setLoadPoke(result.next);
    
    setLoading(false)

    function getpokemon(result) {
      result.map(async (item) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${item.name}`
        );
        const data = await res.json();
        setPokemon((prev) => [...prev, data]);
      });
    }
    getpokemon(result.results);
  };
  // console.log(pokemon);
  const handelInfiniteScroll =  () => {
   
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
       
        setPage((prev) => prev + 1);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
    <div className="flex flex-wrap gap-10 justify-center">
      {pokemon.map((item) => {
        return <Link to={'/details'} state={item} key={item.id}><Card item={item}  /></Link> ;
      })}
    
      
      </div>
      {loading && <Loading />}
      </>
  );
}

export default Body;
