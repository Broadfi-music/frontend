import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

function Navbar() {
	const [active, setActive] = useState(false);
	const [visible, setVisible] = useState(false);
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
							to={"/profile"}
							className="nav-link"
							onClick={() => setActive(false)}
						>
							Profile
						</Link>
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
							<>
								<TonConnectButton className="btn btn-danger" />
							</>
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
				<div className="container others">
					<a href="#">Contest </a>
					<a href="/livestream">Live </a>
					<a href="#">Pools </a>
					<a href="/podcast">Podcast </a>
					<a href="/stake-to-earn">Stake </a>
					<a href="/playlists">Playlists </a>
					<a href="#">Swap </a>
					<a href="#">Jukebox </a>
					<a href="#">Nodes </a>
					<a href="#">Radio stations </a>
					<a href="#">Launchpad </a>
					<a href="#">Distribution </a>
					<a href="#">Ai Curation </a>
				</div>
				<div
					className="toggle_nav"
					onClick={() => setVisible(!visible)}
				>
					All Features <i className="fa-solid fa-chevron-down"></i>
				</div>
			</div>
			<div className={active ? "nav-menu active" : "nav-menu"}>
				<Link
					to={"/profile"}
					className="nav-link"
					onClick={() => setActive(false)}
				>
					Profile
				</Link>
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
					<TonConnectButton className="btn btn-danger" />
				)}
			</div>
			<div className={visible ? "others_nav active" : "others_nav"}>
				<a href="#" onClick={() => setVisible(false)}>
					Contest{" "}
				</a>
				<a href="/livestream" onClick={() => setVisible(false)}>
					Live{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Pools{" "}
				</a>
				<a href="/podcast" onClick={() => setVisible(false)}>
					Podcast{" "}
				</a>
				<a href="/stake-to-earn" onClick={() => setVisible(false)}>
					Stake{" "}
				</a>
				<a href="/playlists" onClick={() => setVisible(false)}>
					Playlists{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Swap{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Jukebox{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Nodes{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Radio stations{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Launchpad{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Distribution{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Ai Curation{" "}
				</a>
			</div>
		</>
	);
}
export default Navbar;
