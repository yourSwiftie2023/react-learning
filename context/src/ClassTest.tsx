import { Component, PureComponent, ReactNode } from "react";
import Context from "./context";

class ClassTest extends Component {
  //   挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
  //  这能让你使用 this.   context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
  // 使用static关键字添加静态属性，和直接在class添加属性效果一致,最终都会添加到类上，而不是类的实例上
  static contextType = Context;
  
  constructor(props: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(props);
  }

  componentDidMount(): void {
    console.log("componentDidMount", this.context);
  }

  shouldComponentUpdate(): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  render(): ReactNode {
    console.log("render", this.context);
    return "classTest";
  }
}

export default ClassTest;
