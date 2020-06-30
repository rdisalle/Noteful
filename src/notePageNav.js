import React from 'react'
import './notePageNav.css'
import CreateButton from './createButton'

export default function NotePageNav(props) {
  return (
    <div className='NotePageNav'>
      <CreateButton
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        className='NotePageNav__back-button'
      >
        Back
      </CreateButton>
      {props.folder && (
        <h3 className='NotePageNav__folder-name'>
          {props.folder.name}
        </h3>
      )}
    </div>
  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}