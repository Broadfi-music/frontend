import React from "react";

function TrackItem({ image, title, artist_name, listeners }) {
	return (
		<div className="track">
			<div className="img">
				<img src={image} alt={title} />
				<p>{title}</p>
			</div>
			<div className="other-info">
				<p>{artist_name}</p>
				<p className="listeners">{listeners}</p>
			</div>
		</div>
	);
}

export default TrackItem;
