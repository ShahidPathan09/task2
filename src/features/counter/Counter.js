import React from 'react'
import { increment, decrement, incrementBy, decrementBy } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(increment()) }}>+</button><br />
            <span>{count}</span><br />
            <button onClick={() => { dispatch(decrement()) }}>-</button><br />
            <button onClick={() => { dispatch(incrementBy(10)) }}>Increment by 10</button><br />
            <button onClick={() => { dispatch(decrementBy(10)) }}>If Even then Decrement by 10</button>
        </div>
    )
}

export default Counter;
