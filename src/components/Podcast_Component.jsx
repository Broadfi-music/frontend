import PodcastItem from './PodcastItem';
import './styles/styles.css';

function Podcast_Component() {
	return (
		<div className="top-podcasts container">
			<h1>Top Podcasts</h1>
			<div className="row">
				<PodcastItem
					name={"The demon eyes"}
					image={"/Images/pl1.png"}
					creator_img={"/Images/cr1.png"}
					price={"0.02450BRD"}
					listeners={"650k"}
				/>
				<PodcastItem
					name={"Grandma dune story"}
					image={"/Images/pl2.png"}
					creator_img={"/Images/cr1.png"}
					price={"0.03450BRD"}
					listeners={"635k"}
				/>
				<PodcastItem
					name={"The Einstein Theory"}
					image={"/Images/pl3.png"}
					creator_img={"/Images/cr1.png"}
					price={"0.02450BRD"}
					listeners={"620k"}
				/>
				<PodcastItem
					name={"The big story of the black boy"}
					image={"/Images/pl4.png"}
					creator_img={"/Images/cr1.png"}
					price={"0.02450BRD"}
					listeners={"590k"}
				/>
				<PodcastItem
					name={"Who told you I'm a savage"}
					image={"/Images/pl5.png"}
					creator_img={"/Images/cr1.png"}
					price={"0.02450BRD"}
					listeners={"535k"}
				/>
				<PodcastItem
					name={"Grand Theft: The Hoodlum Story"}
					image={"/Images/pl6.png"}
					creator_img={"/Images/cr1.png"}
					price={"0.02450BRD"}
					listeners={"515k"}
				/>
			</div>
		</div>
	);
}

export default Podcast_Component;