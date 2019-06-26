import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { NavBarSup } from "./NavBar.js";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBarSup />
			</div>
		);
	}
}
