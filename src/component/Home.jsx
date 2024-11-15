import React from 'react'
import { ThemeContext } from '../context/Theme'
import { UserContext } from '../context/User'

const Home = () => {
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
}

export default Home