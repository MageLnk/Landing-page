import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card.js";
//create your first component
import { NavBarSup } from "./NavBar.js";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBarSup />
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<Card />
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<Card />
						</div>
						<div className="col-sm-3">
							<Card />
						</div>
						<div className="col-sm-3">
							<Card />
						</div>
						<div className="col-sm-3">
							<Card />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
