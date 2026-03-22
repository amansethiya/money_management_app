import React, { useState } from "react";
import AddExpensesOrIncome from "./Incomeorexpences";

const navbar = () => {
  const [isHide, setIsHide] = useState(true);
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
              <button onClick={() => setIsHide(!isHide)}>
                AddExpensesOrIncome
              </button>
            </ul>
          </div>
        </div>
      </div>
      {!isHide && <AddExpensesOrIncome />}
    </>
  );
};

export default navbar;
