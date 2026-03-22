import React from "react";

const navbar = () => {
  return (
    <>
      <div className="header flex justify-center">
        <div className="w-200 h-13 bg-[#ffffff88] flex border-2 rounded-3xl justify-between gap-20 mt-15 p-5">
          <div className="name text-2xl font-[900] text-[#002369] flex flex-col justify-center">
            TRACASH
          </div>
          <div className="flex flex-col justify-center">date&time</div>
          <div className="pages flex flex-col justify-center">
            <ul className="flex gap-5 font-semibold ">
              <li className="">
                <a href="/">Home</a>
              </li>
              <li className="">
                <a href="/addexpence">AddExpence</a>
              </li>
              <li className="">
                <a href="/addincome">AddIncome</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
