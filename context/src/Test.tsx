import { memo, useContext } from "react";
import Context from "./context";

const TestChild: React.FC<{ values: unknown }> = memo(({ values }) => {
  console.log("TestChild");
  return <div>Test{JSON.stringify(values)}</div>;
});

const Test = () => {
  /** 注意：useContext会导致组件重新渲染 **/
  const values = useContext(Context);
  console.log("Test");
  return <TestChild values={values} />;
};

export default Test;
