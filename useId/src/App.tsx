/*
 * @Description: 传统的 Math.random()、uuid、nanoid 服务端与客户端生成的不一致，而react中的useId则可以解决这个问题
 * @Author: 陈崇俊
 * @Date: 2023-05-23 09:06:22
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-05-23 09:12:56
 */
import React, { useId } from 'react';
import './App.css';

function App() {
  // 生成唯一的id
  const id = useId();
  return <span>{id}</span>;
}

export default App;
