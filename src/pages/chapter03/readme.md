## 原则

state 中永远不要保存可以通过计算得到的值

1. props 中传递过来的值，如果需要加工材能使用，利用 cache 机制，而不是将结果放在 state
2. 从 URL 中读取到的值，可以每次需要的时候用 URL 中读取，而不是放在 state 里
3. 从 cookie，localStorage 中读取到的值，每次需要直接读取即可

## 对比 class

useEffect 涵盖了 componentDidMount, componentDidUpdate, componentWillUnmount

函数签名为

`useEffect(callback, dependencies)`

### dependencies 不传，每次 render 都执行

```js
useEffect(() => {
    console.log(Math.random())
})`
```

### dependencies 为空数组，组件首次执行渲染，等价于 componentDidMount

```js
useEffect(() => {
    console.log('init')
}, [])`
```

### dependencies 变化执行

```js
useEffect(() => {
    document.title = title
}, [title])`
```

### 返回函数，执行情理操作

比如需要监听浏览器 resize, 那么就必须在 component 卸载的时候解除监听

```js
useEffect(() => {
  const handle = () => {
    console.log("resize");
  };

  window.addEventListener("resize", handle);

  // return a function
  return () => {
    window.removeEventListener("resize", handle);
  };
}, []);
```

### hooks 只能在函数组件的顶层作用域使用

不能在条件语句，循环里面使用

https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e

### 在类组件中重用

使用高阶函数的方式，将自定义 hooks 的参数当成 props 传入

```js
import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
export const withWindowSize = (Comp) => {
  return (props) => {
    const windowSize = useWindowSize();
    return <Comp windowSize={windowSize} {...props} />;
  };
};
```


### eslint 校验 hooks 是否正确依赖
[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)