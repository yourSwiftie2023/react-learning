import { useState } from "react";
import Child from "./Child";
import Context from "./context";
import Test from "./Test";
import Render from "./Render";
import ClassTest from "./ClassTest";

/** 注意：只要父组件更新，子组件也会跟着更新（无优化） **/
function App() {
  const [values, setValues] = useState<number>(0);
  console.log("父组件执行了");
  return (
    <>
      <Context.Provider value={values}>
        <Child />
        <Test />
        <ClassTest />
      </Context.Provider>
      <button
        type="button"
        onClick={() => {
          setValues((pre) => pre + 1);
        }}
      >
        测试+
      </button>
      <button
        type="button"
        onClick={() => {
          setValues((pre) => pre - 1);
        }}
      >
        测试-
      </button>
      <button
        type="button"
        onClick={() => {
          /** 注意当state已经是3，由于react fiber双缓存机制，再点击会触发函数执行，而不会重新render，
           * 见知乎https://www.zhihu.com/question/591716780 **/
          setValues(() => 3);
        }}
      >
        变成3
      </button>
      <Render />
    </>
  );
}

export default App;
