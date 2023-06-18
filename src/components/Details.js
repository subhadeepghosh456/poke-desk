import React from "react";
import { useLocation } from "react-router-dom";
import { addItems, deleteItems } from "../utils/bookmarkSlice";
import { useDispatch, useSelector } from "react-redux";
// import store from "../utils/store";

function Details() {
  const data = useLocation();
  const dispatch = useDispatch();
  const bookmarkItems = useSelector((store) => store.bookmark.items);
  
  const { name, moves, sprites } = data.state;
  // console.log(moves);
  const handleAdd = (item) => {
    alert("Item added");
    dispatch(addItems(item));
  };
  const handleDelete = (id) => {
    alert("Item Deleted");
    dispatch(deleteItems(id));
  };
  return (
    <div className="w-full h-[100vh] bg-gradient-to-tr from-slate-200 to-purple-950 px-9 py-10 flex flex-col justify-center items-center">
      <div className="w-[300px]">
        <img
          src={sprites?.other?.dream_world?.front_default}
          alt="poke_image"
          className="w-full h-[300px]"
        />
      </div>
      <h3 className="text-center text-2xl text-orange-900 font-bold">{name}</h3>

      {bookmarkItems.some((p) => p.id === data.state.id) ? (
        <button
          className="text-2xl text-red-600"
          onClick={() => {
            handleDelete(data.state.id);
          }}
        >
          <i className="fa-solid fa-bookmark"></i>
        </button>
      ) : (
        <button
          button
          className="text-2xl text-black"
          onClick={() => {
            handleAdd(data.state);
          }}
        >
          <i className="fa-solid fa-bookmark"></i>
        </button>
      )}
      <h2 className="text-2xl font-bold text-gray-900">Abilities</h2>
      <div className="w-full flex flex-wrap">
        {moves.map((item, index) => (
          <span className="px-2 font-bold text-slate-900" key={index}>
            {item.move.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Details;
