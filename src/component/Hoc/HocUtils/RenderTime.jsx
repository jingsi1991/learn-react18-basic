import { PureComponent } from "react"

const LogRenderTime = (OriginComponent)=>{
  return class NewComponent extends PureComponent {
    UNSAFE_componentWillMount(){
      this.begin = new Date().getTime()
    }

    componentDidMount(){
      this.end = new Date().getTime()
      console.log(`当前组件${OriginComponent.name}渲染花费了${this.end - this.begin}ms`)
    }
    render(){
      return <OriginComponent {...this.props}/>
    }
  }
}

export default LogRenderTime