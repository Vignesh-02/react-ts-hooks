import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Counter from './Counter'

interface User{
    id: number,
    username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
    if (n < 2) return n 
    return fib( n - 1 ) + fib( n -2 )
}

const myNum: number = 17



function App() {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)

    useEffect(() => {
        console.log('mounting')
        console.log('Users: ', users)

        return () => console.log('unmounting')
    }, [users])

    const addTwo = useCallback((): void => setCount(prev => prev + 2 ), [])

    // if myNum changes, we want to recalculate this function
    const result = useMemo<number>(() => fib(myNum), [myNum])

    return (
        <div className="App">
            {/* <h1>{count}</h1>
            <button onClick={addTwo}>Add</button>
            <h3>{result}</h3>
            <input ref={inputRef} type="text" /> */}
            <Counter>{(num: number) => <div>Current Count: {num}</div>}</Counter>
        </div>
    )
}

export default App
