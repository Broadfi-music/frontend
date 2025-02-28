import { TonConnect } from "@tonconnect/sdk";

export const tonConnect = new TonConnect({
	manifestUrl: `${window.location.origin}/tonconnect-manifest.json`,
});
