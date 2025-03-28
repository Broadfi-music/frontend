import React from 'react';

function NotConnected() {
    return (
		<div>
			<div className="not-connected">
				<img src="/Images/Icons/frown.png" alt="Frown" />
				<p>Whoops! Looks like you haven’t connected a wallet yet...</p>
				{/* <TonConnectButton className='btn btn-danger' /> */}
				<button className="btn btn-danger">Connect Wallet</button>
			</div>
		</div>
	);
}

export default NotConnected;