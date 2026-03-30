import React, { useContext } from "react";
import Expenses from "../assets/expenses.png";
import Income from "../assets/income.png";
import { mainContext } from "../context/MainContextAPI.jsx";

const totalView = () => {
  const { allExpense } = useContext(mainContext);

  const calcTotal = (type) => {
    if (allExpense.length <= 0) {
      return 0;
    }

    const totalExpense = allExpense
      .filter((cr, i) => cr.type == type)
      .map((cr) => parseInt(cr.amount));

    if (allExpense.length <= 1) {
      return totalExpense[0];
    }

    const price = totalExpense.reduce((pre, cur) => pre + cur, 0);
    return price;
  };

  return (
    <>
      <div className="mainn bg-[#76767684] flex flex-col sm:flex-row justify-around p-3 sm:p-5 m-3 sm:m-5 mt-5 sm:mt-20 rounded-2xl gap-3 sm:gap-15">
        <div className="expence border-4 rounded-4xl w-full sm:w-6/12 h-auto sm:h-25 bg-[#f8b9b9] border-[#FF0000] flex flex-col sm:flex-row items-center justify-around p-3 sm:p-5 gap-2 sm:gap-0">
          <img src={Expenses} alt="" className="w-16 sm:w-25" />
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-3xl font-bold">Total Expenses</h3>
            <h4 className="text-2xl sm:text-4xl font-bold text-[#FF0000]">
              ₹{calcTotal("expense") || 0}
            </h4>
          </div>
        </div>
        <div className="income border-4 rounded-4xl w-full sm:w-6/12 h-auto sm:h-25 bg-[#e0fbd4] border-[#00ff00] flex flex-col sm:flex-row items-center justify-around p-3 sm:p-5 gap-2 sm:gap-0">
          <img src={Income} alt="" className="w-16 sm:w-25" />
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-3xl font-bold">Total Income</h3>
            <h4 className="text-2xl sm:text-4xl font-bold text-[#06BF37]">
              ₹{calcTotal("income") || 0}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default totalView;
