import React, { useState } from "react";
import { Link } from "react-router-dom";

function Head() {
  const [text, setText] = useState("");
  return (
    <div className="w-[full] h-[10vh] flex items-center justify-between fixed left-0 right-0 bg-gradient-to-r from-red-700 to-pink-600 z-10 sm:px-10">
      <Link to={"/"}>
        <h3 className="font-bold text-teal-950 hover:text-yellow-100">
          POKEMON GO
        </h3>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Enter a pokemon Name Here"
          className="w-[100px] py-2 px-4 rounded-3xl outline-none sm:w-[400px]"
          value={text}
          onChange={(e) => setText(e.target.value.toLowerCase())}
        />
        {text.length === 0 ? (
          <button className="py-2 bg-red-300 rounded-3xl px-4 font-bold hover:bg-red-700 hover:text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        ) : (
          <Link to={"/result"} state={text}>
            <button className="py-2 bg-red-300 rounded-3xl px-4 font-bold hover:bg-red-700 hover:text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        )}
      </div>
      <Link to={"/bookmark"}>
        <h3 className="font-bold text-teal-950 hover:text-yellow-100">
          BOOKMARK
        </h3>
      </Link>
    </div>
  );
}

export default Head;
