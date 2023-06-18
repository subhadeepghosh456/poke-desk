import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";

function MainContainer() {
  return (
    <>
      <Head />
      <div className="w-full bg-gradient-to-tl from-blue-600 to-orange-800 absolute top-[10%]">
        <Outlet />
      </div>
    </>
  );
}

export default MainContainer;
