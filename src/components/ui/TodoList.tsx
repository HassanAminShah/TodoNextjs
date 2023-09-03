import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }: any) => {
  return (
    <div>
      <ul>
        {filteredTodos.map((todo: any) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
