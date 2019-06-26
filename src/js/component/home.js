import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card.js";
//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<header className="jumbotron my-4" text="align left">
					<h1 className="display-3" text="align-left">
						A Warm Welcome!
					</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<a href="#" className="btn btn-primary btn-lg">
						Call to action!
					</a>
				</header>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<div className="row">
					<div className="col-sm-4">
						<Card />
					</div>
					<div className="col-sm-4">
						<Card />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						<Card />
					</div>
					<div className="col-sm-4">
						<Card />
					</div>
				</div>
			</div>
		);
	}
}
