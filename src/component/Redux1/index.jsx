import React, { useEffect } from 'react'
import store from '../../redux/store'

const DiyRedux = () => {
  useEffect(()=>{
    const render = () => {
      let countEle = document.querySelector("#count")
      console.log(store.getState())
      const state = store.getState()
    
      countEle.innerHTML = state.count
    }
    
    store.subscribe(render)
    
    store.dispatch()
  },[])
  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'decrement' })}>-</button>
      <span id="count"></span>
      <button onClick={() => store.dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}

export default DiyRedux