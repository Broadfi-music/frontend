import React from 'react';

function Playlist({image, name, likes, dislikes, plays, price}) {
    return (
		<div className="col-md-5">
			<img
				className="playlist-pic"
				src={image}
				alt={name}
			/>
			<h4>{name}</h4>
			<div className="info">
				<div className="play">
					<img src="/Images/Icons/play-fill.png" alt="Plays" />
					{plays}
				</div>
				<div className="likes">
					<img src="/Images/Icons/like-fill.png" alt="Likes" />
					{likes}
				</div>
				<div className="dislikes">
					<img src="/Images/Icons/dislike-fill.png" alt="Dislikes" />
					{dislikes}
				</div>
			</div>
			<div className="price">
				<p className="head">Token Price</p>
				<h3>{price}</h3>
			</div>
		</div>
	);
}

export default Playlist;