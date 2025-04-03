import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
// import { TonConnectButton } from '@tonconnect/ui-react';
function Navbar() {
	const [active, setActive] = useState(false);
	const [visible, setVisible] = useState(false);
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
							<h1 className="logo overflow-hidden">BROADFI</h1>
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
							to={"/contests"}
							className="nav-link"
							onClick={() => setActive(false)}
						>
							Contests
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
					<div
						className={active ? "menu-icon active" : "menu-icon"}
						onClick={() => setActive(!active)}
					>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className="container others">
					<a href="/livestream">Live </a>
					<a href="/">Pools </a>
					<a href="/podcasts">Podcasts </a>
					<a href="/stake-to-earn">Stake </a>
					<a href="/playlists">Playlists </a>
					<a href="#">Swap </a>
					<a href="#">Jukebox </a>
					<a href="#">Radio stations </a>
					<a href="#">Memecoin </a>
					<a href="#">AMm pools</a>
					<a href="#">Audio yield farming </a>
					<a href="#">Audiofi cross chain</a>
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
					Contests
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
			<div className={visible ? "others_nav active" : "others_nav"}>
				<a href="/livestream" onClick={() => setVisible(false)}>
					Live{" "}
				</a>
				<a href="#" onClick={() => setVisible(false)}>
					Pools{" "}
				</a>
				<a href="/podcasts" onClick={() => setVisible(false)}>
					Podcasts{" "}
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
