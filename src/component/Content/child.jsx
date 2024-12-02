import React from 'react'
import { ThemeContext } from '../../context/Theme';
import { UserContext } from '../../context/User';

const Child = () =>{
  return (
    <div>
      <h4>我是Content的子组件</h4>
      
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

export default Child