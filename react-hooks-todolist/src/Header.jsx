import React from "react";

const Header = ({ todos }) => {
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
