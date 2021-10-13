## 前言
在 hooks 之前，唯一可以进行逻辑复用的方式是 HOC （high order component 高阶组件）

## 逻辑复用更直观
hooks 可以把逻辑都抽离在一个 hook function 中

例如下面的 window size hook

```js
const getSize = () => window.innerWidth > 1000 ? 'larget' : 'small'

const useWindowSize = () = => {
    const [size, setSize] = useState(getSize());

    useEffect(() => {
        const handler = () => {
            setState(setSize())
        }

        window.addEventListener('resize', handler)

        () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return { size }
}

# use

const Demo = () => {
    const {size} = useWindowSize()

    return size
}
```


## 关注分离（逻辑聚焦）

相关代码集中在一起，更容易理解和维护

class 组件中，常见听事件会在 componentDidMount 监听，componentDidUnmount 解绑

而 hook 可以在 useEffect 中的 callback 中进行解绑

```js
useEffect(() => {
    const handler = () => {
        setState(setSize())
    }

    window.addEventListener('resize', handler)

    () => {
        window.removeEventListener('resize', handler)
    }
}, [])
```