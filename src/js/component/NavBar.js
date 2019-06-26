import React from "react";

const navlinkItems = ["Home", "about", "Services", "Contact"];
export function NavBarSup() {
	return (
		<div className="Container fondo">
			<div className="row">
				<div className="col-sm-2">
					<h2 className="letrasalfa">Start Boostrap</h2>
				</div>
				<div className="col-sm-6">
					<p />
				</div>
				<div className="col-sm-4">
					<div className="row">
						<li className="nav-item" key={navlinkItems}>
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item" key={navlinkItems}>
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item" key={navlinkItems}>
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item" key={navlinkItems}>
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}
