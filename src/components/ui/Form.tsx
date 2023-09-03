import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }: any) => {
  const inputTextHandler = (e: any) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <div className=" mx-4 pb-6 lg:pb-0 lg:flex lg:justify-center lg:gap-x-5 ">
      <div className="flex pb-5 lg:pb-0  justify-center">
        <input
          value={inputText}
          className="border border-slate-800 px-2 py-2 lg:py-0 "
          type="text"
          placeholder="Enter your todo item "
          onChange={inputTextHandler}
        />
        <button
          className=" hover:bg-green-600 bg-slate-500 text-white font-bold  px-4"
          onClick={submitHandler}
          type="submit"
        >
          <FaPlusSquare />
        </button>
      </div>
      <div className=" flex flex-row justify-center rounded font-bold ">
        <select
          name="todos"
          onChange={statusHandler}
          className="bg-slate-500 hover: white text-white px-5 py-3 lg:my-2 "
        >
          <option value="all">All</option>
          <option className="bg-green-500" value="completed">
            Completed
          </option>
          <option
            className=" bg-red-700 cursor-pointer hover:bg-red-500"
            value="uncompleted"
          >
            Uncompleted
          </option>
        </select>
      </div>
    </div>
  );
};
export default Form;
