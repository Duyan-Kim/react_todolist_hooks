import React, { useContext } from "react";
import { TodoContext } from "./TodoStore.js";

const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1> Hello Todo Application</h1>
      <div>
        해야할일이 {todos.filter((v) => v.status === "todo").length}개가
        있습니다.
      </div>
    </div>
  );
};

export default Header;
