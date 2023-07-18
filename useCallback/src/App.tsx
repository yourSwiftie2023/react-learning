/*
 * @Description: useCallback
 * @Author: 陈崇俊
 * @Date: 2023-05-17 13:29:09
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-05-17 13:54:43
 */
import React, { useState, useCallback } from 'react';
import Test from './Test';

function App() {
  const [count, setCount] = useState<number>(0);

  /** 性能优化，防止组件重复渲染 **/
  const handleClick = useCallback(() => {
    setCount(pre => ++pre);
  }, []);

  return (
    <>
      <button onClick={handleClick}>{count}</button>
      <Test handleClick={handleClick}>1</Test>
    </>
  );
}

export default App;
