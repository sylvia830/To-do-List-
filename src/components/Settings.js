import ReactSlider from "react-slider";
import '../slider.css'
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import BackButton from "./BackButton";

function Settings() {
	const settingsInfo = useContext(SettingsContext)
	return(
		<div style={{textAlign: 'left', width: 250}}>
			<label style={{color: '#fff'}}>Work: {settingsInfo.workMinutes}</label>
			<ReactSlider 
			className={'slider'}
			thumbClassName={'thumb'}
			trackClassName={'track'}
			value={settingsInfo.workMinutes}
			onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
			min={1}
			max={120} />
			<label style={{color: '#fff'}}>Break: {settingsInfo.breakMinutes}</label>
			<ReactSlider 
			className={'slider green'}
			thumbClassName={'thumb'}
			trackClassName={'track'}
			value={settingsInfo.breakMinutes}
			onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
			min={1}
			max={120} />
			<div style={{textAlign: 'center', marginTop: '30px'}}>
			<BackButton onClick = {()=> {settingsInfo.setShowSettings(false)}}/>
			</div>
		</div>
	)
}

export default Settings;