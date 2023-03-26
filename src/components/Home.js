import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from "react";

const Home = () => {
	return(
		<div>
			<CircularProgressbar value={60} text={'60%'} />
		</div>
	)

}

export {Home}