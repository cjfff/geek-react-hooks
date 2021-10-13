## 原则

state 中永远不要保存可以通过计算得到的值

1. props 中传递过来的值，如果需要加工材能使用，利用 cache 机制，而不是将结果放在 state
2. 从 URL 中读取到的值，可以每次需要的时候用 URL 中读取，而不是放在 state 里
3. 从 cookie，localStorage 中读取到的值，每次需要直接读取即可