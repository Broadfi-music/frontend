import { useState } from "react";
import PlaylistItem from "../components/PlaylistItem";
import "../Styles/playlists.css";
import "../components/styles/styles.css";
import TrackItem from "../components/TrackItem";
import Music_Popup from "../components/Music_Popup";

function Playlist() {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<>
			<div className="container playlist_page">
				<div className="hero">
					<img src="/Images/pl2.png" alt="Playlist Pic" />
				</div>
				<div className="title d-flex justify-content-between">
					<h1 className="name">Grandma Dune story</h1>
					<div className="tags">
						<div className="tag">Rap</div>
					</div>
				</div>
				<div className="col d-flex justify-content-between">
					<div className="creator">
						<img src="/Images/plcr.png" alt="Creator pic" />
						<p>Jarvis the nerd</p>
					</div>
					<div className="part-info">
						<div className="listens">
							<i class="fa-solid fa-play"></i>
							<p>635k</p>
						</div>
						<div className="like">
							<i class="fa-solid fa-heart"></i>
							<p>235</p>
						</div>
						<div className="dislike">
							<i class="fa-solid fa-thumbs-down"></i>
							<p>45</p>
						</div>
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
							<p className="artist">Artist</p>
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

				<div className="other-playlists top-playlists  mt-5">
					<h2 className="mb-4 mx-3">Playlists</h2>
					<div className="row">
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
			</div>
			<Music_Popup showPopup={showPopup} />
		</>
	);
}

export default Playlist;
