import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'

const hooks = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.all.plusNumber)
    const incrementCounter = useCallback(() => dispatch({ type: 'set', plusNumber: counter + 1 }))
    const decrementCounter = useCallback(() => dispatch({ type: 'set', plusNumber: counter - 1 }))
    return (
        <div className={styles.center}>
            <h1>Welcome to Redux + Hook</h1>
            <p className='mt-5'>Counter {' '}<code>{counter}</code></p>
            <br />
            <button className={styles.button + ' btn btn-primary'} onClick={incrementCounter}> + </button>
            <button className={styles.button + ' btn btn-danger'} onClick={decrementCounter}> - </button>
        </div>
    )
}

export default hooks