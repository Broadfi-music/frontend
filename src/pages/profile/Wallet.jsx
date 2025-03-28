import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import React from "react";
import Connected from "./Connected";
import NotConnected from "./NotConnected";

function Wallet() {
	const wallet = useTonWallet();
	const optimizedAddress = wallet
		? wallet.account.address.slice(0, 15) + "..."
		: "";

	return (
		<div className="wallet">
			<h1 className="m-3">Wallet</h1>
			{wallet ? <Connected address={optimizedAddress} /> : <NotConnected />}
		</div>
	);
}

export default Wallet;
