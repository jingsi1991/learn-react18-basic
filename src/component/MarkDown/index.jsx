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