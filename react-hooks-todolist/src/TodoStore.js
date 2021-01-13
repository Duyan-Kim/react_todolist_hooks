import React, { useState, useEffect } from "react";
import List from "./List.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";
import Form from "./Form.jsx";

export const TodoContext = React.createContext();

const TodoStore = () => {
  const [todos, setTodos] = useState([]);
  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: newTodo, status: "todo" },
    ]);
  };

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === +id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log("렌더링했어요", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, loading, changeTodoStatus }}>
      <Header />
      <Form />
      <List
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      />
    </TodoContext.Provider>
  );
};

export default TodoStore;
