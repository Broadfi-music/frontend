import { Link } from "react-router-dom";
import "./styles/nav.css";

function Navbar() {
	return (
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
					<button className="btn btn-danger">Connect Wallet</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
