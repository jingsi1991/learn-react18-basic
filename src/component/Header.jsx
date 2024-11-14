import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps ={
    list: []
  }

  render() {
    const { list } = this.props
    return (
      <div>
        <h3>Header</h3>
        <ul>
          {list.map(item => {
            return <li>{item.name}</li>
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
