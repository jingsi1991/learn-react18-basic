import React, { useState } from 'react'
import Modal from './Modal/index'

const PortalsCom = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <div>
        <h3>Portals介绍</h3>
        <div>Portal提供了一种将子节点渲染到存在于父组件以外的DOM节点的能力</div>
        <ul>
          <li>createPortal函数</li>
          <li>第一个参数（child）任何可以渲染的react子元素</li>
          <li>第二个参数（container）是一个DOM元素</li>
        </ul>
        <br />
        <div>
          <button onClick={()=>setVisible(!visible)}>切换modal显隐</button>
        </div>
        <Modal
          title="测试modal"
          visible={visible}
          mask
          onCancel={()=>setVisible(false)}
          onOk={()=>setVisible(false)}
        >
          我是modal的内容，我显示在why中，没有在root
        </Modal>
      </div>
    </div>
  )
}

export default PortalsCom