import { useState } from "react";
import "../Styles/contest.css";
import ContestDetails from "../components/ContestDetails";
import UploadFile from "../components/UploadFile";
import PartItem from "../components/PartItem";

function Contest() {
	const [action, setAction] = useState("details");

	return (
		<div className="contest">
			<div className="info hero container">
				<img src="/Images/hero2.png" alt="Contest img" />
				<div className="text">
					<h1>GANGS IN THE HOOD CONTEST</h1>
					<div className="content">
						<div className="col">
							<p>Hosted by</p>
							<img src="/Images/logo.png" alt="BroadFi" />
						</div>
						<div className="col">
							<h5>Deadline:</h5>
							<p>February 15, 2025</p>
							<div className="btn btn-danger">Enter Contest</div>
						</div>
					</div>
				</div>
			</div>
			<div className="more-info container mt-4">
				<div className="row">
					<div
						className="item col-md-2"
						onClick={() => setAction("details")}
					>
						Details
					</div>
					<div className="item col-md-2">Prizes/Rules</div>
					<div className="item col-md-2">How It Works</div>
					<div className="item col-md-2">Announcements</div>
					<div
						className="item col-md-2"
						onClick={() => setAction("upload")}
					>
						Upload
					</div>
				</div>
				<div className="content">
					{action === "details" ? <ContestDetails /> : <UploadFile />}
				</div>
				<div className="show-more">Show More</div>
			</div>
			<div className="participant-info container">
				<div className="image">
					<img
						className="img"
						src="/Images/p1.png"
						alt="Participant"
					/>
					<img
						className="play-btn"
						src="/public/Images/Play.png"
						alt="Play"
					/>
				</div>
				<div className="text">
					<div className="tags">
						<div className="tag">Rap</div>
						<div className="tag">Remix</div>
					</div>
					<h2>The love I have for you </h2>
					<div className="part-info">
						<div className="listens">
							<img src="/Images/listen.png" alt="Listens" />
							<p>123</p>
						</div>
						<div className="like">
							<img src="/Images/like.png" alt="Like" />
							<p>14</p>
						</div>
						<div className="dislike">
							<img src="/Images/dislike.png" alt="Dislike" />
							<p>20</p>
						</div>
					</div>
					<div className="worth">
						<span>0.2040</span>BRD
					</div>
                    <div className="vote">
                        <input className="form-control" type="text" name="amountBRD" placeholder="BRD Amount" />
                        <button className="btn btn-danger">
                            Vote
                        </button>
                    </div>
				</div>
			</div>
			<div className="participants container">
				<h2>Participants</h2>
				<div className="row mt-5">
					<PartItem
						image={"/Images/p1.png"}
						name={"Emeka"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2040"}
					/>
					<PartItem
						image={"/Images/p2.png"}
						name={"Samuel"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2180"}
					/>
					<PartItem
						image={"/Images/p3.png"}
						name={"David"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.1200"}
					/>
					<PartItem
						image={"/Images/p4.png"}
						name={"Trent"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.1740"}
					/>
					<PartItem
						image={"/Images/p5.png"}
						name={"Saliba"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2040"}
					/>
					<PartItem
						image={"/Images/p6.png"}
						name={"Julius"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2040"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contest;
