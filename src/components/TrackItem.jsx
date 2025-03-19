import React from "react";
import { useState } from "react";

function TrackItem({ image, title, artist_name, listeners, setShowPopup }) {
	const [isPlaying, setIsPlaying] = useState(false);

	const handleClick = () => {
		setIsPlaying(!isPlaying);
		setShowPopup(true);
	};

	return (
		<div className="track">
			<div className="info">
				<div className="img">
					<img src={image} alt={title} />
					<button onClick={() => handleClick()}>
						<i
							className={
								isPlaying
									? "fa-solid fa-pause"
									: "fa-solid fa-play"
							}
						></i>
					</button>
				</div>
				<p>
					{title} <p className="mobile-artist">{artist_name}</p>{" "}
				</p>
			</div>
			<div className="other-info">
				<p className="artist">{artist_name}</p>
				<p className="listeners">{listeners}</p>
			</div>
		</div>
	);
}

export default TrackItem;
