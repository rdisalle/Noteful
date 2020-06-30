import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MainSidebar.css'
import CreateButton from './createButton'
import { countNotesForFolder } from './notesHelp'

export default function MainSidebar(props) {
  return (
    <div className='MainSidebar'>
      <ul className='MainSidebar__list'>
        {props.folders.map(folder =>
          <li key={folder.id}>
            <NavLink
              className='MainSidebar__folder-link'
              to={`/folder/${folder.id}`}
            >
              <span className='MainSidebar__num-notes'>
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='MainSidebar__button-wrapper'>
      <div className='MainSidebar__button-container'>
        <CreateButton
          tag={Link}
          to='/add-Folder'
          type='button'
          className='MainSidebar__add-Folder-button'
        >
          Add Folder
        </CreateButton>
      </div>
      </div>
    </div>
  )
}

MainSidebar.defaultProps = {
  folders: []
}