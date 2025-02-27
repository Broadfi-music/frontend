import { useState } from "react";
import "../Styles/stake.css";
import { useRef } from "react";

function Staking() {
	const [isEditing, setIsEditing] = useState(false);
	const focusRef = useRef();

	const handleClick = () => {
		setIsEditing(true);
		focusRef.current.focus();
	};

	return (
		<div className="container staking">
			<h1>Stake to Earn</h1>
			<p className="info">
				Staking involves locking up funds in a decentralized protocol.
				In return, stakers receive yields either in the form of
				additional tokens or through an increase in the value of their
				staked tokens.
			</p>
			<div className="stake-section">
				<div className="amount">
					<div className="col">
						<img src="/Images/logo2.png" alt="Logo" />
						<p>Broadfi Token</p>
					</div>
					<h2>
						<input
							type="number"
							className="form-control"
							placeholder="0"
						/>
						.00BRD
					</h2>
				</div>
				<div className="time">
					<div>3 weeks</div>
					<div>1 month</div>
					<div>3 months</div>
					<div>4 months</div>
				</div>
				<div className="btns">
					<button className="btn btn-danger">Stake</button>
					<button className="btn btn-yellow">Unstake</button>
				</div>
			</div>
			<div className="positions mt-5">
				<h2>My Positions</h2>
				<div className="section"></div>
				<div className="text">
					<p>
						<span>48.9%</span>APY Reward
					</p>
					<p className="mt-3">
						Note: Stake amount starts from 60,000BRD to 500,000BRD,
						you earn reward back for staking broadfi token, lock
						time is for 3 weeks to 4 months, you select the amount
						of time.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Staking;
