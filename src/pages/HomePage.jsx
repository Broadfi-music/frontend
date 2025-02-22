import Charts from "../components/Charts";
import Contest from "../components/Contest";
import HeroSection from "../components/HeroSection";
import Playlists from "../components/Playlists";

function HomePage() {
	return (
		<>
			<HeroSection />
            <Contest />
            <Charts />
            <Playlists />
		</>
	);
}

export default HomePage;
