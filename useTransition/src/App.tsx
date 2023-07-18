/*
 * @Description: useTransition
 * @Author: 陈崇俊
 * @Date: 2023-05-23 14:10:05
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-05-23 14:27:50
 */
import { useState, useTransition, useMemo } from 'react';
import './App.css';

const numbers = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 100)
);

function App() {
  const [query, setQuery] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: any) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        query ? (
          i.toString().startsWith(query) && <p key={index}>{i}</p>
        ) : (
          <p key={index}>{i}</p>
        )
      ),
    [query]
  );

  return (
    <>
      <input type='number' onChange={handleChange} />
      <div>{isPending ? 'Loading...' : list}</div>
    </>
  );
}

export default App;
