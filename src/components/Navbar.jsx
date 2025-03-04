import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

function Navbar() {
	const [active, setActive] = useState(false);
    const wallet = useTonWallet();

	return (
		<>
			<div className="navbar navbar-expand-lg">
				<div className="container">
					<div className="navbar-brand">
						<Link to={"/"} className="nav-link">
							<h1 className="logo">BROADFI</h1>
						</Link>
					</div>
					<div className="navbar-nav">
						<Link to={"/contest"} className="nav-link">
							Contest
						</Link>
						<Link to={"/how-it-works"} className="nav-link">
							How it works
						</Link>
						<Link to={"/tokenmics"} className="nav-link">
							Tokenmics
						</Link>
						<Link to={"/discover"} className="nav-link">
							Discover
						</Link>
						{wallet ? (
							<p>Connected: {wallet.account.address}</p>
						) : (
							<TonConnectButton className="btn btn-danger tonbtn" />
						)}
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
			<div className={active ? "nav-menu active" : "nav-menu"}>
				<Link to={"/contest"} className="nav-link">
					Contest
				</Link>
				<Link to={"/how-it-works"} className="nav-link">
					How it works
				</Link>
				<Link to={"/tokenmics"} className="nav-link">
					Tokenmics
				</Link>
				<Link to={"/discover"} className="nav-link">
					Discover
				</Link>
				{wallet ? (
					<p>Connected: {wallet.account.address}</p>
				) : (
					<TonConnectButton className="btn btn-danger tonbtn" />
				)}
			</div>
		</>
	);
}
export default Navbar;
