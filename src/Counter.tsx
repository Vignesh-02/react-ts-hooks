import { ChangeEvent, ReactNode, useReducer } from 'react'

const initState = { count: 0, text: '', name: '' }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
    NAME,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? ''}
        case REDUCER_ACTION_TYPE.NAME:
            return { ...state, name: action.payload ?? ''}
        default:
            throw new Error()
    }
}

type Child = {
    children: (num: number) => ReactNode
}

const Counter = ({ children }: Child) => {


    const [state, dispatch] = useReducer(reducer, initState)

    const inc = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const dec = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ 
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })
    }
    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ 
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })
    }
    
    return (
        <>
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
            <input type="text" onChange={handleTextInput} />
            <h2>{state.text}</h2>
            <div>Counter</div>
        </>
        
    )
}

export default Counter



