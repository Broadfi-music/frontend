import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import NavLinks from "./NavLinks";

function Navbar() {
	const [active, setActive] = useState(false);
	return (
		<>
			<img className="blur" src="/Effects/blur.png" alt="" />
			<div className="navbar navbar-expand-lg">
				<div className="container">
					<div className="navbar-brand">
						<Link
							to={"/"}
							className="nav-link"
							onClick={() => setActive(false)}
						>
							<h1 className="logo">BROADFI</h1>
						</Link>
					</div>
					<div className="navbar-nav">
						<NavLinks setActive={setActive} />
					</div>
					<div
						className={active ? "menu-icon active" : "menu-icon"}
						onClick={() => setActive(!active)}
					>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className={active ? "nav-menu active" : "nav-menu"}>]
				<Link
					to={"/contest"}
					className="nav-link"
					onClick={() => setActive(false)}
				>
					Contest
				</Link>
				<Link
					to={"/tokenmics"}
					className="nav-link"
					onClick={() => setActive(false)}
				>
					Tokenmics
				</Link>
				<Link
					to={"/discover"}
					className="nav-link"
					onClick={() => setActive(false)}
				>
					Discover
				</Link>
				<p>Connected: {optimizedAddress}</p>
			</div>
		</>
	);
}
export default Navbar;
