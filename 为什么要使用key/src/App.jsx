import React from 'react';

function App() {
  const [data, setData] = React.useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'George' },
    { id: 3, name: 'Sally' },
    { id: 4, name: 'Tom' },
  ]);

  const onChange = ({ value }, id) =>
    data.map(item => {
      if (item.id === id) {
        item.name = value;
      }
      return item;
    });

  return (
    <>
      <button
        type='button'
        onClick={() =>
          setData(preState => preState.filter((_, index) => index !== 0))
        }
      >
        删除
      </button>
      <ul>
        {/* 此处key是index即使是受控组件整个也会重新渲染 */}
        {data.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
            {/* 受控跟非受控区别 */}
            <input
              value={item.name}
              onChange={e => onChange(e.target, item.id)}
            />
          </div>
        ))}
      </ul>
      <ul>
        {/* 此处加了key不会有问题 */}
        {data.map((item, index) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <input defaultValue={item.name} />
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
