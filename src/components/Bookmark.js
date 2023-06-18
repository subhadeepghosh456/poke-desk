import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItems } from "../utils/bookmarkSlice";

function Bookmark() {
  const bookmarkItems = useSelector((store) => store.bookmark.items);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    alert("Item added");
    dispatch(addItems(item));
  };
  const handleDelete = (id) => {
    alert("Item Deleted");
    dispatch(deleteItems(id));
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-white border-b-4">Bookmark</h2>
    <div className="h-[100%] py-11 flex justify-center items-center flex-wrap gap-5">
      
      {bookmarkItems.map((item) => {
        return (
          <div key={item.id} className="w-[200px]">
            <img
              src={item?.sprites?.other?.dream_world?.front_default}
              alt="bookmarkImg"
              className="w-full h-[200px]"
            />
            <h3 className="text-center text-2xl text-white">{item.name}</h3>
            {bookmarkItems.some((p) => p.id === item.id) ? (
              <button
                className="text-2xl text-red-600"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                <i className="fa-solid fa-bookmark"></i>
              </button>
            ) : (
              <button
                button
                className="text-2xl text-black"
                onClick={() => {
                  handleAdd(item);
                }}
              >
                <i className="fa-solid fa-bookmark"></i>
              </button>
            )}
          </div>
        );
      })}
      </div>
      </>
  );
}

export default Bookmark;
