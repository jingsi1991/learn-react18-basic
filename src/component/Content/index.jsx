/**
 * 类组件无法关联多个Context
 *   static contextType = ThemeContext
 */
import React from 'react'

import { ThemeContext } from '../../context/Theme';
import { UserContext } from '../../context/User';
import Child from './child';
import MarkDownCode from '../MarkDown';

const markdown = `
\`\`\`jsx
import React from 'react'
import Markdown from 'react-markdown'

const MarkDownCode = ({ markdown }) => {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}

export default MarkDownCode
\`\`\`
`

const Content = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: 'liudawei', age: 34 }}>
        <ThemeContext.Provider value={{ name: 123, color: 'red' }}>
          <div>我是Content</div>
          <Child />
        </ThemeContext.Provider>
      </UserContext.Provider>

      <MarkDownCode markdown={markdown}/>
    </div>
  )
}

export default Content