import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../context/Theme'
import { flushSync } from 'react-dom'

class Header extends Component {
  // 类组件无法关联多个Context
  static contextType = ThemeContext
  static propTypes = {
    list: PropTypes.array,
  }

  static defaultProps ={
    list: []
  }

  state = {
    counter: 0
  }

  /**
   * 类组件优化：
   *  1、shouldComponentUpdate 生命周期：比较新旧props和state，如果有变化返回true，进行 render，否则返回false ，不进行 render
   *  2、继承PureComponent 类，自动实现 shouldComponentUpdate ，不过是浅比较
  */ 
  shouldComponentUpdate(nextProps,nextState){
    return true
  }

  add = ()=>{
    // setState是异步的，最终counter只加了 1
    // this.setState({
    //   counter: this.state.counter+1
    // })
    // this.setState({
    //   counter: this.state.counter+1
    // })
    // this.setState({
    //   counter: this.state.counter+1
    // })

    // 函数时，最终counter只加了 3
    // this.setState((state)=>{
    //   return {
    //     counter: state.counter +1
    //   }
    // })
    // this.setState((state)=>{
    //   return {
    //     counter: state.counter +1
    //   }
    // })
    // this.setState((state)=>{
    //   return {
    //     counter: state.counter +1
    //   }
    // })

    // react18之前，同步的，counter加了3 ; 18之后最终counter只加了 1
    // 如果想要让某一次setState变成同步的，可以使用 flushSync 包裹
    setTimeout(()=>{
      flushSync(()=>{
        this.setState({
          counter: this.state.counter+1
        })
      })
      this.setState({
        counter: this.state.counter+1
      })
      this.setState({
        counter: this.state.counter+1
      })
    },0)
  }


  render() {
    const { list } = this.props
    const { counter} = this.state
    console.log('header render')
    return (
      <div>
        <h3>Header</h3>
        <h4>{this.context.name}</h4>
        <div>
          {counter}<button onClick={this.add}>加1</button>
        </div>
        <ul>
          {list.map(item => {
            return <li key={item.name}>{item.name}</li>
          })}
        </ul>
      </div>
    )
  }
}


// 类型检测：可以单独编写，也可以作为类的静态属性编写
Header.propTypes = {
  list: PropTypes.array
}
// props的默认值
Header.defaultProps = {
  list: []
}
export default Header
