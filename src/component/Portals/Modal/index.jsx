import React from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import Overlay from './Overlay ';
import './style.css'

const Modal = ({ visible, mask, title, onCancel, onOk, children, getContainer }) => {
  if (visible) {
    return (
      <Portal mode="modal">
        {mask && <Overlay />}
        <div className='modalWrapper'>
          {
            title && (<div className='modalTitle'>{title}</div>)
          }
          {children}
          <div className='modalFooter'>
            <button onClick={onCancel}>取消</button>
            <button onClick={onOk}>确认</button>
          </div>
        </div>
        {/* <div style={modalStyles}>{children}</div> */}
      </Portal>
    )
  }
  return null
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  mask: PropTypes.bool,
  title: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Modal