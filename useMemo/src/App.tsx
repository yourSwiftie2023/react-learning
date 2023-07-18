/*
 * @Description: useMemo
 * @Author: 陈崇俊
 * @Date: 2023-05-17 14:09:18
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-05-18 09:35:19
 */
import React, { useMemo } from 'react';

function App() {
  const getCount = (): number => {
    let i: number = 0;
    for (let index = 0; index < 10000; index++) {
      i += index;
    }
    return i;
  };

  const count = useMemo(() => getCount(), []);

  return (
    <span>
      {getCount()}
      --------
      {count}
    </span>
  );
}

export default App;
