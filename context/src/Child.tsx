import { memo } from "react";
import Context from "./context";

/** 注：这里添加memo可防止多次执行 **/
const Child = memo(() => {
  console.log("Child组件渲染");
  return (
    <Context.Consumer>
      {(values) => {
        return JSON.stringify(values) + ", Child组件";
      }}
    </Context.Consumer>
  );
});

export default Child;
