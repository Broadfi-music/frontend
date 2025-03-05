import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

function Navbar() {
	const [active, setActive] = useState(false);
	const wallet = useTonWallet();
	const optimizedAddress = wallet
		? wallet.account.address.slice(0, 15) + "..."
		: "";

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
						{wallet ? (
							<p>Connected: {optimizedAddress}</p>
						) : (
							<TonConnectButton />
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
			</div>
		</>
	);
}
export default Navbar;
