/**
 * 
 */
import React, { useState } from 'react'
import { ThemeContext } from './context/Theme'
import HocFunc from './HocUtils/HocFunc'
import WithThemeHoc from './HocUtils/WithThemeHoc'
import LoginAuth from './HocUtils/AuthHoc'
import LogRenderTime from './HocUtils/RenderTime'

import Home from './components/Home'
import Profile from './components/Profile'
import HelloFriend from './components/HelloFriend'


const WrapHome = HocFunc(Home)
const WrapHomeWithTheme = WithThemeHoc(Home)
const WrapHomeWithAuth = LoginAuth(Home)
const WrapHomeLogTime = LogRenderTime(Home)

const WrapProfile = HocFunc(Profile)
const WrapHelloFriend = HocFunc(HelloFriend)


const Hoc = () => {
  const [age, setAge] = useState(20)
  const changeAge = () => {
    setAge(age + 1)
    localStorage.setItem("token",'122')
  }
  return (
    <div>
      <h3>Hoc组件演示</h3>
      <h4>本质：对传入的组件进行拦截，做一些操作，然后返回一个新的组件</h4>
      <h4>作用：为了进行代码的复用</h4>
      <ul>
        <li>使用hoc对组件的props进行增强 WrapHome</li>
        <li>context内容的共享 WrapHomeWithTheme</li>
        <li>应用场景：需要判断登录的 WrapHomeWithAuth</li>
      </ul>
      <div>已有的高阶函数：
        <ul>
          <li>函数式组件中：memo(HelloWorld)、forwardRef</li>
          <li>redux中：connect</li>
        </ul>
      </div>
      <button onClick={changeAge}>修改age/登录</button>
      <Home age={age} />
      <br />
      <WrapHome age={age} />
      <br />
      <ThemeContext.Provider value={{ color: "red" }}>
        <WrapHomeWithTheme age={age} />
      </ThemeContext.Provider>
      <br />
      <WrapHomeWithAuth />
      <br />
      <WrapHomeLogTime />
      <br />
      <Profile />
      <WrapProfile />
      <HelloFriend />
      <WrapHelloFriend />
    </div>
  )
}

export default Hoc