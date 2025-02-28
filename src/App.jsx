import { TonConnect } from "@tonconnect/sdk";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Contest from "./pages/Contest";
import HowItWorks from "./pages/HowItWorks";
import Playlists from "./pages/Playlists";
import Playlist from "./pages/Playlist";
import Staking from "./pages/Staking";

function App() {
	const tonConnect = new TonConnect();

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" Component={HomePage} />
					<Route path="/contest" Component={Contest} />
					<Route path="/how-it-works" Component={HowItWorks} />
					<Route path="/playlists" Component={Playlists} />
					<Route path="/playlist" Component={Playlist} />
					<Route path="/stake-to-earn" Component={Staking} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
