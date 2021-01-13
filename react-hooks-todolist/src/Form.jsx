import React from "react";
import { TodoContext } from "./App.js";

const Form = () => {
  const { addTodo, changeInputData } = useContext(TodoContext)
  return (
    <>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일 추가</button>
      </form>
    </>
  );
};

export default Form;
