import React from 'react'

const Strict = ()=> {
  console.log(22222)
  return (
    <div>
      <div>StrictMode 模式用来突出显示应用程序中潜在的问题</div>
      <ul>
        <li>严格模式检查仅在开发模式下运行；它不会影响生产构建</li>
        <li>可以局部开启严格模式检查</li>
        <li>在第一次渲染时会执行两次</li>
        <li>识别不安全的生命周期，并在控制器告警</li>
      </ul>
    </div>
  )
}

export default Strict