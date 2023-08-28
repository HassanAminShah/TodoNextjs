import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex justify-between px-3 items-center py-2 border border-slate-800 m-3 flex-grow flex-1 lg:mx-96 md:mx-48 lg:px-8 lg:m-5">
      <li className=" text-fuchsia-900 font-semibold">{text}</li>
      <div>
        <button className=" px-3 text-green-600" onClick={completeHandler}>
          <FaCheck />
        </button>
        <button className=" text-red-600" onClick={deleteHandler}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
