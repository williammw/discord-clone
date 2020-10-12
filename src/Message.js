import React from 'react'
import './Message.css'
import {Avatar} from '@material-ui/core'
export default function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>Wwwwwmw
          <span className="message__timestamp">this is a timestamnp</span>
        </h4>

        <p>this is a message</p>
      </div>
    </div>
  )
}
