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
      <div className="mainn bg-[#76767684] flex justify-around p-5 m-5 mt-20 rounded-2xl gap-15">
        <div className="expence border-4 rounded-4xl w-6/12 h-25 bg-[#f8b9b9] border-[#FF0000] flex items-center justify-around ">
          <img src={Expenses} alt="" className="w-25" />
          <h3 className="text-3xl font-bold  ">Total Expenses</h3>
          <h4 className="text-4xl font-bold text-[#FF0000]">
            ₹{calcTotal("expense") || 0}
          </h4>
        </div>
        <div className="income border-4 rounded-4xl w-6/12 h-25 bg-[#e0fbd4] border-[#00ff00] flex items-center justify-around ">
          <img src={Income} alt="" className="w-25" />
          <h3 className="text-3xl font-bold">Total Income</h3>
          <h4 className="text-4xl font-bold text-[#06BF37]">
            ₹{calcTotal("income") || 0}
          </h4>
        </div>
      </div>
    </>
  );
};

export default totalView;
