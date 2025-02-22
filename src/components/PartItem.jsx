import React from "react";

function PartItem({ name, image, likes, dislikes, listens, worth }) {
	return (
		<div className="participant col-md-3">
			<img className="image" src={image} alt={name} />
			<div className="text">
				<div className="part-info">
					<div className="listens">
						<img src="/Images/listen.png" alt="Listens" />
						<p>{listens}</p>
					</div>
					<div className="like">
						<img src="/Images/like.png" alt="Like" />
						<p>{likes}</p>
					</div>
					<div className="dislike">
						<img src="/Images/dislike.png" alt="Dislike" />
						<p>{dislikes}</p>
					</div>
				</div>
				<h5>{name}</h5>
				<div className="worth">
					<span>{worth}</span>BRD
				</div>
                <button className="btn btn-danger">Vote</button>
			</div>
		</div>
	);
}

export default PartItem;
