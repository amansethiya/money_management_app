import React from "react";

const list = () => {
  return (
    <>
      <div className="mainn flex justify-center bg-[#ffffff88] p-5 m-5 rounded-2xl mt-20">
        <table className="min-w-11/11 bg-[#e8cbcb] border-3">
          <thead>
            <tr className="border-3 bg-[#9d9d9d] text-2xl ">
              <th className="border-3 px-3 py-1">Sr. no.</th>
              <th className="border-3 px-3 py-1 ">Date</th>
              <th className="border-3 px-3 py-1">Transaction</th>
              <th className="border-3 px-3 py-1">Purpose</th>
              <th className="border-3 px-3 py-1">Amount.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border text-center text-xl font-[500]">
              <td className="border px-3 py-1">01</td>
              <td className="border px-3 py-1">22-03-2026</td>
              <td className="border px-3 py-1">Income</td>
              <td className="border px-3 py-1">from client to make webiste </td>
              <td className="border px-3 py-1">+ 4500</td>
            </tr>
            <tr className="border text-center text-xl font-[500]">
              <td className="border px-3 py-1">01</td>
              <td className="border px-3 py-1">22-03-2026</td>
              <td className="border px-3 py-1">expence</td>
              <td className="border px-3 py-1">for domain & hosting </td>
              <td className="border px-3 py-1">- 1500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default list;
