import React from "react";
import Playlist from "./Playlist";

function Tracks() {
	return (
		<div className="tracks">
			<h1 className="m-3">Tracks</h1>{" "}
			<div className="playlists m-3 mt-4">
				<h3>Your Playlists</h3>
				<div className="row mt-4">
					<Playlist
						image={"/Images/placeholder image.jpg"}
						name={"Kahoots with da hood"}
						plays={"635k"}
						likes={"635k"}
						dislikes={"635k"}
						price={"0.0023BRD"}
					/>
					<Playlist
						image={"/Images/placeholder image.jpg"}
						name={"Kahoots with da hood"}
						plays={"635k"}
						likes={"635k"}
						dislikes={"635k"}
						price={"0.0023BRD"}
					/>
					
				</div>
				<div className="show-more mt-4 text-center">
					Show More
					<img src="/Images/Icons/chevron-down.png" alt="more" />
				</div>
			</div>
		</div>
	);
}

export default Tracks;
