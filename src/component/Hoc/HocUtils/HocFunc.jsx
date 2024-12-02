import React, { useState } from 'react'

const enhancedUserInfo = (OriginComponent) => {
  const NewComponent = ( props) => {
    const [userInfo,setUserInfo] = useState({
      name: 'ldw',
      level: 99
    })

    const changeUserInfo = ()=>{
      setUserInfo({
        ...userInfo,
        name: userInfo.name + new Date().getTime()
      })
    }

    return <div>
      <button onClick={changeUserInfo}>更新useInfo</button>
      <OriginComponent {...userInfo} {...props}/>
    </div>

  }
  return NewComponent
}

export default enhancedUserInfo