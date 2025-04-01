import React from 'react';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const ConnectWallet = () => {
    const navigate = useNavigate();
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        if (isConnected) {
          navigate('/homepage');
        }
      }, [isConnected, navigate]);
    useEffect(() => {
    window.addEventListener('tonconnect:wallet_connected', handleConnection);
    return () => {
        window.removeEventListener('tonconnect:wallet_connected', handleConnection);
    };
    }, []);
    return (
        <TonConnectUIProvider manifestUrl="https://broadfi-frontend.vercel.app/manifest.json">
        <div className="wallet">
            <TonConnectButton />
        </div>
        </TonConnectUIProvider>
    );
};

export default ConnectWallet;