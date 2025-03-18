import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Contest from "./pages/Contest";
import Playlists from "./pages/Playlists";
import Playlist from "./pages/Playlist";
import Staking from "./pages/Staking";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./Styles/media-queries.css";

function App() {
	return (
		<>
			<TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" Component={Welcome} />
						<Route path="/homepage" Component={HomePage} />
						<Route path="/contest" Component={Contest} />
						<Route path="/playlists" Component={Playlists} />
						<Route path="/playlist" Component={Playlist} />
						<Route path="/stake-to-earn" Component={Staking} />
						<Route path="/profile" Component={Profile} />
					</Routes>
                    <Footer />
				</Router>
			</TonConnectUIProvider>
		</>
	);
}

export default App;
