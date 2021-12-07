import React from 'react'
import { increment, decrement } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(increment()) }}>+</button><br />
            <span>{count}</span><br />
            <button onClick={() => { dispatch(decrement()) }}>-</button>
        </div>
    )
}

export default Counter;
