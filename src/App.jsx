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
import Contests from "./pages/Contests";
import Podcasts from "./pages/Podcasts";

function App() {
	return (
		<>
			<Router>
				<TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
					<Navbar />
					<Routes>
						<Route path="/" Component={Welcome} />
						<Route path="/homepage" Component={HomePage} />
						<Route path="/contest" Component={Contest} />
						<Route path="/contests" Component={Contests} />
						<Route path="/playlists" Component={Playlists} />
						<Route path="/playlist" Component={Playlist} />
						<Route path="/stake-to-earn" Component={Staking} />
						<Route path="/profile" Component={Profile} />
						<Route path="/podcasts" Component={Podcasts} />
					</Routes>
					
					<Footer />
				</TonConnectUIProvider>
			</Router>
		</>
	);
}

export default App;
