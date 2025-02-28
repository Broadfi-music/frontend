import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tonConnect } from "../../tonConnect";
import "./styles/nav.css";

function Navbar() {
	const [wallet, setWallet] = useState(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		tonConnect.restoreConnection();
		tonConnect.onStatusChange((wallet) => {
			console.log("Wallet status updated:", wallet);
			setWallet(wallet); // Ensure wallet state updates
		});
	}, []);

	const connectWallet = async () => {
		try {
			const wallets = await tonConnect.getWallets();

			if (wallets.length === 0) {
				alert(
					"No wallets available. Please install Tonkeeper or another TON wallet."
				);
				return;
			}

			// Find Tonkeeper or fallback to first available wallet
			const selectedWallet =
				wallets.find((wallet) => wallet.name === "Tonkeeper") ||
				wallets[0];

			if (!selectedWallet) {
				alert("No compatible wallet found.");
				return;
			}

			// Initiate connection
			await tonConnect.connect({
				universalLink: selectedWallet.universalLink,
				bridgeUrl: selectedWallet.bridgeUrl,
			});

			// Wait for the connection to be established
			setTimeout(() => {
				const account = tonConnect.account;
				if (account) {
					console.log("Wallet connected:", account);
				} else {
					console.log("Connection failed. Please try again.");
                    
				}
			}, 2000); // Add a short delay to allow status update
		} catch (error) {
			console.error("Error connecting wallet:", error);
		}
	};

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
							<button
								onClick={connectWallet}
								className="btn btn-danger"
							>
								Connect Wallet
							</button>
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
			<div className={active ? "nav-menu active" : 'nav-menu'}>
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
					<button onClick={connectWallet} className="btn btn-danger">
						Connect Wallet
					</button>
				)}
			</div>
		</>
	);
}
export default Navbar;
