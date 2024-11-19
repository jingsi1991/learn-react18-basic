import React, { forwardRef } from 'react'

const Func = forwardRef((props, ref) =>{
  return (
    <div>
      <h2 ref={ref}>Func 我是Func 函数组件</h2>
      <p>好的好的</p>
    </div>
  )
})

export default Func