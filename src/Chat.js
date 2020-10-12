import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import Message from './Message';

export default function Chat() {
  return (
    <div className="chat">      
      <ChatHeader/>

      <div className="chat__messages">
        <Message /> 
        <Message /> 
        <Message /> 
        <Message /> 
        <Message /> 
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large"/>
        <form action="">
          <input placeholder={`Message #TESTCHANNEL`}/>
          <button className="chat__inputButton" type="submit">Semd Message</button>
        </form>


        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large"/>
          <GifIcon fontSize="large"/>
          <EmojiEmotionsIcon fontSize="large"/>
        </div>
      </div>
    </div>
  )
}
