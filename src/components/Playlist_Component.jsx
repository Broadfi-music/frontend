import PlaylistItem from './PlaylistItem';
import './styles/styles.css';

function Playlist_Component() {
	return (
		<div className="top-playlists container">
			<h1>Top Playlists</h1>
			<div className="row">
				<PlaylistItem
					name={"The demon eyes"}
					image={"/Images/pl1.png"}
					tag={"Trap"}
					price={"0.02450BRD"}
					mcap={"3.6M"}
					listeners={"650k"}
				/>
				<PlaylistItem
					name={"Grandma dune story"}
					image={"/Images/pl2.png"}
					tag={"Rap"}
					price={"0.03450BRD"}
					mcap={"3.1M"}
					listeners={"635k"}
				/>
				<PlaylistItem
					name={"The Einstein Theory"}
					image={"/Images/pl3.png"}
					tag={"Trap"}
					price={"0.02450BRD"}
					mcap={"2.9M"}
					listeners={"620k"}
				/>
				<PlaylistItem
					name={"The big story of the black boy"}
					image={"/Images/pl4.png"}
					tag={"Electronic"}
					price={"0.02450BRD"}
					mcap={"2.4M"}
					listeners={"590k"}
				/>
				<PlaylistItem
					name={"Who told you I'm a savage"}
					image={"/Images/pl5.png"}
					tag={"Country"}
					price={"0.02450BRD"}
					mcap={"3.6M"}
					listeners={"535k"}
				/>
				<PlaylistItem
					name={"Grand Theft: The Hoodlum Story"}
					image={"/Images/pl6.png"}
					tag={"Rap"}
					price={"0.02450BRD"}
					mcap={"3.6M"}
					listeners={"515k"}
				/>
			</div>
		</div>
	);
}

export default Playlist_Component;