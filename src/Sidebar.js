import React from 'react'
import './Sidebar.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar__top">
        <h3>Hello</h3>
        <ExpandMoreIcon/>
      </div>      
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon/>
            <h4>TextChannels</h4>
          </div>
          <AddIcon className="sidebar__addChannel"></AddIcon>
        </div>
      </div>
      <div className="sidebar__channelList">
        <SidebarChannel/>
        <SidebarChannel/>
        <SidebarChannel/>
        <SidebarChannel/>

      </div>
    </div>
  )
}
