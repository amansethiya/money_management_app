import React, { useContext } from "react";
import { mainContext } from "../context/MainContextAPI.jsx";

const list = () => {
  const { allExpense } = useContext(mainContext);
  return (
    <>
      <div className="mainn flex justify-center bg-[#ffffff88] p-3 sm:p-5 m-2 sm:m-5 rounded-2xl mt-5 sm:mt-20 overflow-x-auto">
        <table className="min-w-11/11 bg-[#e8cbcb] border-3 w-full">
          <thead>
            <tr className="border-3 bg-[#9d9d9d] text-lg sm:text-2xl">
              <th className="border-3 px-2 sm:px-3 py-1">Sr. no.</th>
              <th className="border-3 px-2 sm:px-3 py-1">Date</th>
              <th className="border-3 px-2 sm:px-3 py-1">Transaction</th>
              <th className="border-3 px-2 sm:px-3 py-1">Purpose</th>
              <th className="border-3 px-2 sm:px-3 py-1">Amount.</th>
            </tr>
          </thead>
          <tbody>
            {allExpense && allExpense.length >= 1 ? (
              allExpense.map((cr, i) => {
                return (
                  <tr
                    key={i}
                    className="border text-center text-base sm:text-xl font-[500]"
                  >
                    <td className="border px-2 sm:px-3 py-1">{i + 1}</td>
                    <td className="border px-2 sm:px-3 py-1"> {cr.date} </td>
                    <td className="border px-2 sm:px-3 py-1">{cr.type}</td>
                    <td className="border px-2 sm:px-3 py-1">{cr.purpose}</td>
                    <td className="border px-2 sm:px-3 py-1">{cr.amount}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default list;
