import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./index.less";
export const MainLayout: React.FC = () => {
  return (
    <div className="container">
      <h1>欢迎来到本人自己搭建的脚手架</h1>
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2333686485,2594251412&fm=26&gp=0.jpg" />
      <p>
        <Link to={"/person"}>了解更多</Link>
      </p>
    </div>
  );
};

export default MainLayout;
