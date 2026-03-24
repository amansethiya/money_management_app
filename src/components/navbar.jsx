import React, { useContext, useState } from "react";
import { mainContext } from "../context/MainContextAPI.jsx";

const navbar = () => {
  const [isHide, setIsHide] = useState(true);
  const { allExpense, setAllExpense } = useContext(mainContext);
  const onSubmitHandler = (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const date = formData.get("date") || "";
      const amount = formData.get("amount") || 0;
      const type = formData.get("type") || "";
      const purpose = formData.get("purpose") || "";

      if (!date || amount < 0 || !type || !purpose) {
        alert("fill all the details correctly");
        return;
      }

      const exp = {
        date,
        amount,
        type,
        purpose,
        id: Date.now(),
      };

      setAllExpense([...allExpense, exp]);
      alert("your data saved successfully!");
      event.target.reset();
      setIsHide(true);
    } catch (error) {
      console.error(error.message);
    }
  };
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
      {!isHide && (
        <div className="flex justify-center gap-20 border-2 bg-[#7e7e7e] m-20 mt-18 rounded-2xl px-10 py-10">
          <div className="bg-gray-200 rounded-3xl p-6 w-5/12 shadow-lg">
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
              {/* Date + Amount Row */}
              <div className="flex gap-3">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm mb-1">Date</label>
                  <input
                    type="date"
                    required
                    name="date"
                    className="bg-gray-500 text-white rounded-full px-4 py-2 outline-none"
                  />
                </div>

                <div className="flex flex-col w-1/2">
                  <label className="text-sm mb-1">Amount</label>
                  <input
                    required
                    type="number"
                    name="amount"
                    placeholder="₹"
                    className="bg-gray-500 text-white rounded-full px-4 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Type */}
              <div className="flex flex-col">
                <label className="text-sm mb-1">Type</label>
                <div className="bg-gray-500 rounded-full px-4 py-2 flex gap-6 text-white">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      className="accent-black"
                      required
                      value="income"
                    />
                    Income
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      className="accent-black"
                      required
                      value="expense"
                    />
                    Expense
                  </label>
                </div>
              </div>

              {/* Purpose */}
              <div className="flex flex-col">
                <label className="text-sm mb-1">Purpose</label>
                <textarea
                  required
                  name="purpose"
                  rows="3"
                  className="bg-gray-500 text-white rounded-2xl px-4 py-2 outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  className="text-2xl px-3 py-1 bg-gray-500 rounded-full"
                >
                  →
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-gray-500 text-black rounded-full py-2 font-medium hover:bg-gray-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="lesson bg-gray-200 rounded-3xl p-6 w-5/12 shadow-lg flex flex-col justify-center gap-5">
            <div className="head text-4xl font-extrabold text-center">
              input explanation
            </div>
            <div className=" text-xl font-semibold text-left flex flex-col gap-3 text-[#4d4d4d] ">
              <h5>
                {" "}
                <span className="text-[#2f2f2f] font-bold">Date:</span> Try to
                give exact date of transaction.
              </h5>
              <h5>
                <span className="text-[#2f2f2f] font-bold">Amount:</span> Try to
                give exact Amount.
              </h5>
              <h5>
                <span className="text-[#2f2f2f] font-bold">Type:</span> Must
                SELECT right type.
              </h5>
              <h5>
                <span className="text-[#2f2f2f] font-bold">Purpose:</span> Enter
                the purpose of transaction clearly.
              </h5>
              <h5>
                <span className="text-[#2f2f2f] font-bold">Submit:</span> Must
                click Submit Button to save your income or expenses record.
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default navbar;
