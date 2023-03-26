import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useEffect } from "react";
import '../styles.css';
import { ProSidebarProvider, useProSidebar } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';
import Timer from './Timer';

const Pomodoro = () => {
	const [showSettings, setShowSettings] = useState(false);
	const [workMinutes, setWorkMinutes] = useState(45);
	const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <div style={{ display: "flex"}}>
      <ProSidebarProvider>
        <Sidebar style={{marginTop: 50, backgroundColor: '#3498DB'}}>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
      {/* <main>
        <button onClick={() => collapseSidebar()}>Close</button>
      </main> */}
      <div className="pomo">
		<text className='pomodoro-text' style={{ paddingTop: 80, color: '#ffffff', fontSize: 25 }}>Pomodoro</text>
		<SettingsContext.Provider value={{
			showSettings,
			setShowSettings,
			workMinutes,
			breakMinutes,
			setBreakMinutes,
			setWorkMinutes
		}}>
		{showSettings ? <Settings/> : <Timer />}

		</SettingsContext.Provider>
	  </div>
    </div>
  );
};

export default Pomodoro;

// <div>
		// 	<div style={{ paddingTop: 80 }}>
		// 	<CircularProgressbar
		// 	value={60}
		// 	text={'60%'}
		// 	className="progressbar"
		// 	/>
		// 	</div>
		// 	<div style={{marginTop: 20, marginLeft: 90}}>
		// 		{isPaused? <PlayButton className='button'/> : <PauseButton className='button'/>}
		// 	</div>
		// 	<div style={{marginTop: 20, marginLeft: 50}}>
		// 		<SettingsButton className='button' onClick={() => {setShowSettings(true)}}/>
		// 	</div>
		// </div>}
