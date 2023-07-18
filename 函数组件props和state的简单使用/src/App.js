/*
 * @Description: 函数组件props，state，context使用
 * @Author: 陈崇俊
 * @Date: 2023-02-14 09:05:44
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-02-15 13:03:47
 */
import React, { useState, useReducer, useContext } from 'react';
import MyContext from './context';

function Test({ name, age = 18 }) {
  const context = useContext(MyContext);

  return (
    <h1>
      name:{name},age:{age}
      函数组件消费到了：{JSON.stringify(context)}
      <MyContext.Consumer>
        {value => <div>函数组件中Consumer到了：{JSON.stringify(value)}</div>}
      </MyContext.Consumer>
    </h1>
  );
}

class ClassText extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: 11,
    };
    console.log(this.state, this.props);
  }
  static contextType = MyContext;
  render() {
    return <h3>类组件消费到了：{JSON.stringify(this.context)}</h3>;
  }
}

function App() {
  // 使用 useState
  const [value, setValue] = useState(0);
  // 使用 useReducer
  const reducer = (preState, action) => {
    switch (action.type) {
      case 'add':
        return ++preState;
      case 'reduce':
        return --preState;
      default:
        break;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  const person = {
    name: 'John',
    age: undefined, // 注意如果是null，则不使用默认age
  };

  return (
    <MyContext.Provider value={{ a: count, b: 2, c: 3, d: value }}>
      value:{value}
      count:{count}
      <button
        type='button'
        onClick={() => {
          setValue(preState => ++preState);
          dispatch({ type: 'add' });
        }}
      >
        {/**注意++在前与在后的区别 **/}+
      </button>
      <button
        type='button'
        onClick={() => {
          setValue(preState => --preState);
          dispatch({ type: 'reduce' });
        }}
      >
        {/**注意--在前与在后的区别 **/}-
      </button>
      <Test {...person} />
      <ClassText log='data' />
      <MyContext.Consumer>
        {value => <div>类组件中Consumer到了：{JSON.stringify(value)}</div>}
      </MyContext.Consumer>
    </MyContext.Provider>
  );
}

export default App;
