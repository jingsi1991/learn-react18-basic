import { ThemeContext } from "../context/Theme"

// 返回一个函数式组件
const WithTheme = (OriginComponent) =>{

  return props =>{
    return <ThemeContext.Consumer>
      {
        value=>{
          return <OriginComponent {...value} {...props}/>
        }
      }
    </ThemeContext.Consumer>
  }
}

export default WithTheme