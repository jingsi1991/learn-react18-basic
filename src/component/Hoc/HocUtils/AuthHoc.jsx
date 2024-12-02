const LoginAuth = (OriginComponent)=>{
  return props => {
    const token = localStorage.getItem("token")
    if(token){
      return <OriginComponent {...props}/>
    }else{
      return <h3>请先登录</h3>
    }
  }
}


export default LoginAuth