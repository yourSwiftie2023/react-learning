/*
 * @Description: Children五大方法使用
 * @Author: 陈崇俊
 * @Date: 2023-02-13 17:21:41
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-02-15 10:26:02
 */
import React, { Children } from 'react';

class ChildrenCounter extends React.PureComponent {
  render() {
    return Children.count(this.props.children);
  }
}

class ChildrenOnlyChecker extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(!!Children.only(this.props.children)); // true
  }
  render() {
    return Children.only(this.props.children);
  }
}

class ChildrenToArray extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(Children.toArray(this.props.children)); // ['bananas', 'oranges', 'apples']
  }
  render() {
    return Children.toArray(this.props.children);
  }
}

function App() {
  // Children下方法:
  // count: 计算有多少个子组件
  // forEach: 类似于map
  // map: 可以处理undefined，null不会报错
  // only: 判断获取的children是不是只有一个，如果是，就返回这个children, 如果不是，则报错。
  // toArray: 子组件转化成数组时，可以使用toArray这个函数

  return (
    <>
      <ChildrenCounter>
        {Children.map([1, 1, 2, 32], (item, index) =>
          console.log('map', item, index)
        )}
        {Children.forEach([1, 1, 2, 32], (item, index) =>
          console.log('forEach', item, index)
        )}
        <h1>test1</h1>
        <h2>test2</h2>
        <h3>test3</h3>
      </ChildrenCounter>
      <ChildrenOnlyChecker>
        <>
          <h1>test1</h1>
          <h2>test2</h2>
          <h3>test3</h3>
        </>
      </ChildrenOnlyChecker>
      <ChildrenToArray>
        {/* 此处则会转换成数组 */}
        {/* <h1>test1</h1>
        <h2>test2</h2>
        <h3>test3</h3> */}
        {'bananas'}
        {'oranges'}
        {'apples'}
      </ChildrenToArray>
    </>
  );
}

export default App;
