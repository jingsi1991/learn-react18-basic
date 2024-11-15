import React, { memo } from 'react'
import { ThemeContext } from '../context/Theme'
import { UserContext } from '../context/User'

// memo：函数式组件的性能优化
const Home = memo(() => {
  return (
    <div>
      <h4>Home</h4>
      <UserContext.Consumer>
        {
          () => (
            <ThemeContext.Consumer>
              {
                (value) => {
                  return <h2>{value.color}</h2>
                }
              }
            </ThemeContext.Consumer>
          )
        }
      </UserContext.Consumer>
    </div>
  )
})

export default Home