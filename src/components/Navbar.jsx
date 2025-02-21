import { Link } from 'react-router-dom';
import './styles/nav.css';

function Navbar() {
	return (
		<div className="navbar navbar-expand-lg">
			<div className="container">
				<div className="navbar-brand">
					<h1 className="logo">BROADFI</h1>
				</div>
				<div className="navbar-nav">
					<Link to={"/"} className="nav-link">
						Home
					</Link>
					<Link to={"/contest"} className="nav-link">
						Contest
					</Link>
					<Link to={"/how-it-works"} className="nav-link">
						How it works
					</Link>
					<button className="btn btn-danger">Connect Wallet</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
