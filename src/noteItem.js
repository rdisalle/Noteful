import React from 'react';
import { Link } from 'react-router-dom'
import './noteItem.css'

export default function NoteItem(props) {
    return (
        <div className='Note'>
          <h2 className='Note__title'>
            <Link to={`/note/${props.id}`}>
              {props.name}
            </Link>
          </h2>
          <button className='Note__delete' type='button'>
            {' '}
            Delete Note
          </button>
          <div className='Note__dates'>
            <div className='Note__dates-modified'>
              Date Modified on
              {' '}
              <span className='Date'>
                {props.modified}
              </span>
            </div>
          </div>
        </div>
      )
    }

 