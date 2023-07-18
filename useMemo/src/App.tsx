/*
 * @Description: useMemo
 * @Author: 陈崇俊
 * @Date: 2023-05-17 14:09:18
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-18 15:26:25
 */
import React, { useMemo, useState } from "react";
import Test from "./Test";

function App() {
  const arr = [
    { id: 1, a: "aaa" },
    { id: 2, a: "bbb" },
    { id: 3, a: "ccc" },
  ];
  const [i, setI] = useState(1);
  const getCount = (): number => {
    let i: number = 0;
    for (let index = 0; index < 10000; index++) {
      i += index;
    }
    return i;
  };

  const data1 = useMemo(() => {
    const getData = <T extends any[]>(data: T, i: number) => {
      return data[i === 0 || i === 3 ? 0 : 2];
    };
    return getData(arr, i);
  }, [i]);

  const count = useMemo(() => getCount(), []);

  return (
    <>
      <span>
        {getCount()}
        --------
        {count}
      </span>
      <Test data={data1} />
      <button type="button" onClick={() => setI(0)}>
        设置为0
      </button>
      <button type="button" onClick={() => setI(3)}>
        设置为3
      </button>
    </>
  );
}

export default App;
