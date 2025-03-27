import { useState } from "react";
import PlaylistItem from "../components/PlaylistItem";
import "../Styles/playlists.css";
import "../components/styles/styles.css";
import TrackItem from "../components/TrackItem";
import Music_Popup from "../components/Music_Popup";
import PodcastItem from "../components/PodcastItem";

function Podcast() {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<>
			<div className="container playlist_page">
				<div className="hero">
					<img src="/Images/pl2.png" alt="Playlist Pic" />
				</div>
				<div className="title d-flex justify-content-between">
					<h1 className="name">Talk about what you do</h1>
				</div>
				<div className="col d-flex justify-content-between">
					<div className="creator">
						<img src="/Images/plcr.png" alt="Creator pic" />
						<p>Jarvis the nerd</p>
					</div>
				</div>
				<div className="col d-flex justify-content-between mt-4">
					<div className="m-info">
						<div className="worth">
							<p className="head">Token Price</p>
							<p>
								<span>0.024560</span>BRD
							</p>
						</div>
						<div className="info">
							<p className="head">Market Caps</p>
							<p>3.1M</p>
						</div>
					</div>
					<div className="stake">
						<input
							type="text"
							className="form-control"
							placeholder="Token Amount"
						/>
						<button className="btn btn-danger">Stake</button>
					</div>
				</div>

				<div className="tracks mt-5">
					<div className="header">
						<p className="track-name">Name</p>
						<div className="other-info">
							<p className="artist">Creator</p>
							<p className="listeners">Listeners</p>
						</div>
					</div>
					<TrackItem
						image={"/Images/p6.png"}
						title={"God's Plan"}
						artist_name={"Drake"}
						listeners={"125k"}
						setShowPopup={setShowPopup}
					/>
					<TrackItem
						image={"/Images/p3.png"}
						title={"Money"}
						artist_name={"Malone"}
						listeners={"15k"}
						setShowPopup={setShowPopup}
					/>
					<TrackItem
						image={"/Images/p5.png"}
						title={"Demons"}
						artist_name={"Lil Durk"}
						listeners={"645k"}
						setShowPopup={setShowPopup}
					/>
				</div>

				<div className="top-podcasts  mt-5">
					<h2 className="mb-4 mx-3">Other Podcasts</h2>
					<div className="row">
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
			</div>
			<Music_Popup showPopup={showPopup} />
		</>
	);
}

export default Podcast;
