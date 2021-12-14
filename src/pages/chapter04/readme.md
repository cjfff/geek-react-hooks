## 为什么避免重复定义回调函数

### useCallback 缓存回调函数

函数组件每次 render 内部的变量都会重新生成，而如果其他子组件依赖了这个函数则又会 rerender 一次

before

```js
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};
```

after 这样只有每次 count 修改了后，handleClick 才会重新创建

```js
import React, { useState, useCallback } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};
```

### useMemo
当依赖的值变化时才重新执行的惰性存储

```js
import React, { useState, useMemo } from "react";

export const Index = () => {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  const filterList = useMemo(() => {
    if (!list || !list.length) return []
    return list.filter(item => item.name.includes(keyword))
  }, [list, keyword])

  return (
    <div>
      {
        filterList.map(item => (
          <div>{item.name}</div>
        ))
      }
    </div>
  );
};
```


## useRef
可以在多次渲染之间共享值, 一般用来保存与 ui 无关的字段，或者 dom 节点



## useContext
可以用来定义全局状态
