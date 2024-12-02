import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom';

const Portal = ({ mode, children }) => {
  const nodeRef = useRef(null)

  if (!nodeRef.current) {
    nodeRef.current = document.createElement('div')
    nodeRef.current.id = `${mode}-${new Date().getTime()}`; // 添加前缀以避免潜在的 ID 冲突
    document.body.appendChild(nodeRef.current);
  }

  useEffect(() => {
    return () => {
      if (nodeRef.current) {
        document.body.removeChild(nodeRef.current)
        nodeRef.current = null
      }
    }
  }, [])

  return createPortal(children, nodeRef.current)
}

export default Portal