import React from "react";

function Connected({ address }) {
	return (
		<div className="connected m-3 mt-5">
			<div className="fields">
				<div className="form-group">
					<div className="name">
						<label htmlFor="name">Username</label>
						<input
							type="text"
							id="name"
							className="form-control"
							value={"John Doe"}
						/>
					</div>
					<div className="wallet-name">
						<label htmlFor="username">Wallet Name</label>
						<div className="input">
							<input
								type="text"
								id="username"
								className="form-control"
								value={"TonKeeper"}
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="icon-overlay left">
						<label htmlFor="walletId">Wallet ID</label>
						<div className="input">
							<img src="/Images/Icons/hash.png" alt="hash" />
							<input
								type="text"
								id="walletId"
								className="form-control"
								value={address}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Connected;
