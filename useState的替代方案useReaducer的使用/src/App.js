/*
 * @Description: A Cure for React useState Hell
 * @Author: 陈崇俊
 * @Date: 2023-02-15 09:59:03
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-02-15 10:14:57
 */
import React, { useReducer } from 'react';

function App() {
  const [person, updateEvent] = useReducer(
    // state,action
    // 此处还可以加以限制，对传进来参数进行限制
    (prev, next) => ({ ...prev, ...next }),
    { name: '', age: '', address: '' }
  );

  return (
    <>
      name:{person.name}, age:{person.age}
      <input
        value={person.title}
        onChange={e => updateEvent({ name: e.target.value })}
      />
    </>
  );
}

export default App;
