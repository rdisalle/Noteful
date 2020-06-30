import React from 'react'
import { Link } from 'react-router-dom'
import NoteItem from './noteItem'
import CreateButton from './createButton'
import './mainPage.css'

export default function MainPage(props) {
  return (
    <section className='MainPage'>
      <ul>
        {props.notes.map(note =>
          <li key={note.id}>
            <NoteItem
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
      <div className='MainPage__button-container'>
        <CreateButton
          tag={Link}
          to='/add-note'
          type='button'
          className='MainPage__add-note-button'
        >
          Add Note
        </CreateButton>
      </div>
    </section>
  )
}

MainPage.defaultProps = {
  notes: [],
}