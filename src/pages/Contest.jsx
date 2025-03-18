import { useState } from "react";
import "../Styles/contest.css";
import ContestDetails from "../components/ContestDetails";
import UploadFileContest from "../components/UploadFileContest";
import PartItem from "../components/PartItem";

function Contest() {
	const [action, setAction] = useState("details");
	const [active, setActive] = useState(false);

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
			<div className="info mobile content">
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
					{action === "details" ? (
						<ContestDetails />
					) : (
						<UploadFileContest />
					)}
				</div>
				<div className="show-more">Show More</div>
			</div>
			<div
				className={
					active
						? "participant-info container active"
						: "participant-info container"
				}
				id="participant-info"
			>
				<div className="image">
					<img
						className="img"
						src="/Images/p1.png"
						alt="Participant"
					/>
					<i class="fa-solid fa-play"></i>
				</div>
				<div className="text">
					<div className="tags">
						<div className="tag">Rap</div>
						<div className="tag remix">Remix</div>
					</div>
					<h2>The love I have for you</h2>
					<div className="part-info">
						<div className="listens">
							<i class="fa-solid fa-play"></i>
							<p>123</p>
						</div>
						<div className="like">
							<i class="fa-solid fa-heart"></i>
							<p>14</p>
						</div>
						<div className="dislike">
							<i class="fa-solid fa-thumbs-down"></i>
							<p>20</p>
						</div>
					</div>
					<div className="worth">
						<span>0.2040</span>BRD
					</div>
					<div className="vote">
						<input
							className="form-control"
							type="text"
							name="amountBRD"
							placeholder="BRD Amount"
						/>
						<button className="btn btn-danger">Vote</button>
					</div>
				</div>
			</div>
			<div className="participants container">
				<h2>Participants</h2>
				<div className="row mt-4">
					<PartItem
						image={"/Images/p1.png"}
						name={"Emeka"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2040"}
						setActive={setActive}
					/>
					<PartItem
						image={"/Images/p2.png"}
						name={"Samuel"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2180"}
						setActive={setActive}
					/>
					<PartItem
						image={"/Images/p3.png"}
						name={"David"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.1200"}
						setActive={setActive}
					/>
					<PartItem
						image={"/Images/p4.png"}
						name={"Trent"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.1740"}
						setActive={setActive}
					/>
					<PartItem
						image={"/Images/p5.png"}
						name={"Saliba"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2040"}
						setActive={setActive}
					/>
					<PartItem
						image={"/Images/p6.png"}
						name={"Julius"}
						likes={"14"}
						listens={"123"}
						dislikes={"20"}
						worth={"0.2040"}
						setActive={setActive}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contest;
