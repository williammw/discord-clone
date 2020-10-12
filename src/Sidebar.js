import React from 'react'
import './Sidebar.css'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarChannel from './SidebarChannel';
import Avatar from '@material-ui/core/Avatar';
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
        
        <div className="sidebar__channelList">
          <SidebarChannel/>
          <SidebarChannel/>
          <SidebarChannel/>
          <SidebarChannel/>
        </div>        
      </div>   


      <div className="sidebar__voice">
        <SignalCellularAltIcon 
          className="sidebar__voiceIcons"
          fontSize="large"
        />
        
        <div className="sidebar__voiceInfo">
          <h3>Voide Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voideIcons">
          <InfoIcon/>
          <CallIcon/>
        </div>
      </div> 

      <div className="sidebar__profile">
        <Avatar src="https://pbs.twimg.com/profile_images/1267841444200321025/4jtlvrSK_400x400.jpg"/>
        <div className="sidebar__profileInfo">
          <h3>William</h3>
          <p>#thisismyID</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon/>
          <SettingsIcon/>
        </div>
      </div>
    </div>
  )
}
