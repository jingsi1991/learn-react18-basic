/**
 * 获取Dom或组件（类组件）实例的方式
 *  1、字符串形式： 元素设置 ref=xxx 属性，然后通过 this.refs.xxx 获取
 *  2、createRef形式
 *  3、回调函数的形式
 * 
 * 获取函数式组件：没有实例，所以没法获取，通常使用 forwardRef 包裹函数组件，绑定内部某一个元素
 * 
 */
import React, { Component, createRef } from 'react'
import Func from './Func'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    // createRef形式
    this.H2Ref = createRef()

    this.callBackEl = null

    this.FuncRef = createRef()
  }

  showBtnRef = () => {
    console.log(this.refs.BtnRef)
  }

  showH2Ref = ()=>{
    console.log(this.H2Ref.current)
  }

  showCallBackRef = ()=>{
    console.log(this.callBaccallBackElkRef)
  }
  
  showFuncRef = ()=>{
    console.log(this.FuncRef.current)
  }

  render() {
    return (
      <div>
        <div>
          {/* 字符串形式 */}
          <button ref="BtnRef" onClick={this.showBtnRef}>我是BtnRef</button>
        </div>
        <div>
          <h2 ref={this.H2Ref}>我是createRef</h2>
          <button onClick={this.showH2Ref}>获取createRef</button>
        </div>
        <div>
          {/* 回调函数形式 */}
          <h2 ref={(el)=>this.callBackEl = el }>我是createRef</h2>
          <button onClick={this.showCallBackRef}>获取createRef</button>
        </div>
        <div>
          <Func ref={this.FuncRef}/>
          <button onClick={this.showFuncRef}>showFuncRef</button>
        </div>
      </div>
    )
  }
}

export default Dashboard
