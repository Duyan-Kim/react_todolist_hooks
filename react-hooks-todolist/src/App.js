import React, { useState, useEffect } from "react";
import List from "./List.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";
import Form from "./Form.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
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
    <>
      <Header todos={todos} />
      <Form addTodo={addTodo} changeTodoStatus={changeInputData} />
      <List
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};

export default App;
