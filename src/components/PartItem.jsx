import React from "react";
import { useState } from "react";

function PartItem({ name, image, likes, dislikes, listens, worth }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="participant col-3">
			<img className="image" src={image} alt={name} />
			<div className="text">
				<div className="part-info">
					<div className="listens">
						<i class="fa-solid fa-play"></i>
						<p>{listens}</p>
					</div>
					<div className="like">
						<i class="fa-solid fa-heart"></i>
						<p>{likes}</p>
					</div>
					<div className="dislike">
						<i class="fa-solid fa-thumbs-down"></i>
						<p>{dislikes}</p>
					</div>
				</div>
				<h5>{name}</h5>
				<div className="worth">
					<span>{worth}</span>BRD
				</div>
				<div className="vote">
					<input
						className={
							isActive ? "form-control" : "form-control d-none"
						}
						type="text"
						name="amountBRD"
						placeholder="BRD Amount"
					/>
					{isActive ? (
						<button className="btn btn-danger">Vote</button>
					) : (
						<button className="btn btn-danger" onClick={() => setIsActive(true)}>Enter Amount</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default PartItem;
