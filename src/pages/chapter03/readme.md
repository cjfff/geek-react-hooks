## 原则

state 中永远不要保存可以通过计算得到的值

1. props 中传递过来的值，如果需要加工材能使用，利用 cache 机制，而不是将结果放在 state
2. 从 URL 中读取到的值，可以每次需要的时候用 URL 中读取，而不是放在 state 里
3. 从 cookie，localStorage 中读取到的值，每次需要直接读取即可


## 对比 class

useEffect 涵盖了 componentDidMount, componentDidUpdate, componentWillUnmount

函数签名为

`useEffect(callback, dependencies)`

用法/行为 有三种

### dependencies 变化之行

```js
`useEffect(() => {
    document.title = title
}, [title])`
```


### dependencies 位置不传，每次 render 都执行

```js
`useEffect(() => {
    console.log(Math.random())
})`
```

### dependencies 为空数组，只执行一次

```js
`useEffect(() => {
    console.log('init')
}, [])`
```