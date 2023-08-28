"use client";
import Form from "@/components/ui/Form";
import TodoList from "@/components/ui/TodoList";
import React, { useState, useEffect } from "react";
export default () => {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-around mx-auto bg-slate-300 ">
      <div className="">
        <header className=" flex justify-center font-bold text-3xl py-10 lg:py-12 lg:text-[55px]">
          Hassan's Todo List
        </header>
        <Form
          todos={todos}
          inputText={inputText}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
      <div className=" mt-auto flex pt-5 pb-2 justify-around opacity-80 border-t-2 border-slate-600 lg:flex-row lg:flex ">
        <div className="">Copyright © 2023</div>

        <span className=" font-bold flex justify-end">
          Code by: HassanAminShah on github
        </span>
      </div>
    </div>
  );
};
