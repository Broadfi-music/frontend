import React from "react";
import { Link } from "react-router-dom";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

function NavLinks({setActive}) {
	const wallet = useTonWallet();

	const optimizedAddress = wallet
		? wallet.account.address.slice(0, 15) + "..."
		: "";

	return (
		<>
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
				<TonConnectButton className="btn btn-danger tonbtn" />
			)}
		</>
	);
}

export default NavLinks;
