import React from 'react'
import './createButton.css'

export default function CreateButton(props) {
  const { tag, className, children, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['CreateButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

CreateButton.defaultProps ={
  tag: 'a',
}