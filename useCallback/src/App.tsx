/*
 * @Description: useCallback
 * @Author: 陈崇俊
 * @Date: 2023-05-17 13:29:09
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-05-17 13:54:43
 */
import React, { useState, useCallback } from "react";
import Test from "./Test";

// 跳过组件的重新渲染
// 优化自定义 Hook 如果您正在编写自定义 Hook，建议将其返回的所有函数包装到 useCallback 中
// 防止效果过于频繁地触发
function App() {
  const [count, setCount] = useState<number>(0);

  /** 性能优化，防止组件重复渲染 **/
  const handleClick = useCallback(() => {
    setCount((pre) => ++pre);
  }, []);

  return (
    <>
      <button onClick={handleClick}>{count}</button>
      <Test handleClick={handleClick}>1</Test>
    </>
  );
}

export default App;
