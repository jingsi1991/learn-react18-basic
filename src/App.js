import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import SetStateCom from './component/SetState';

import RefComponent from './component/Ref'
import FormComponent from './component/Form';
import ContentComponent from './component/Content';
import Performance from './component/Performance'
import Hoc from './component/Hoc';
import PortalsCom from './component/Portals';
import Strict from './component/Strict';

const App = () => {
  // const list = [
  //   { name: 123 },
  //   { name: 2342 },
  //   { name: 43242 },
  //   { name: 423432 }
  // ]
  const menuList = [
    { key: 'content', title: 'Content', Component: <ContentComponent /> },
    { key: 'ref', title: 'Ref', Component: <RefComponent /> },
    { key: 'setState', title: 'setState', Component: <SetStateCom /> },
    { key: 'form', title: '表单', Component: <FormComponent /> },
    { key: 'performance', title: '性能优化', Component: <Performance /> },
    { key: 'hoc', title: 'HOC组件', Component: <Hoc /> },
    { key: 'Portals', title: 'PortalsCom', Component: <PortalsCom /> },
    { key: 'StrictMode', title: 'StrictMode', Component: <Strict /> }
  ]
  const [activeMenu, setActiveMenu] = useState(menuList[0])

  const handleMenuClick = (item) => {
    setActiveMenu(item)
  }

  return (
    <div className="app">
      <div className='header'>
        <h3>React18 核心知识点Demo</h3>
      </div>
      <div className='content'>
        <div className='side'>
          <ul>
            {
              menuList.map((menu, index) => {
                return (
                  <li
                    key={menu.key}
                    className={menu.key === activeMenu.key ? 'active' : ''}
                    onClick={() => handleMenuClick(menu)}>
                    {`${index + 1}、${menu.title}`}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='main'>
          {activeMenu.Component}
        </div>
      </div>
    </div>
  );
}

export default App;
