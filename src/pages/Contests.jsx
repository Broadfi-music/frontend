import React from "react";
import ContestItem from "../components/ContestItem";
import '../Styles/contest.css';

function Contests() {
	return (
		<div className="container contests">
			<h1>Available Contests</h1>
			<div className="row mt-3">
				<ContestItem
					image={"/Images/contest1.png"}
					name={"Days between us"}
					sub_Date={"February 16, 2025"}
					prize={"800,000BRD"}
					tags={["Original"]}
				/>
				<ContestItem
					image={"/Images/contest1.png"}
					name={"Days between us"}
					sub_Date={"February 16, 2025"}
					prize={"800,000BRD"}
					tags={["Original"]}
				/>
				<ContestItem
					image={"/Images/contest1.png"}
					name={"Days between us"}
					sub_Date={"February 16, 2025"}
					prize={"800,000BRD"}
					tags={["Original"]}
				/>
				<ContestItem
					image={"/Images/contest1.png"}
					name={"Days between us"}
					sub_Date={"February 16, 2025"}
					prize={"800,000BRD"}
					tags={["Original"]}
				/>
				<ContestItem
					image={"/Images/contest1.png"}
					name={"Days between us"}
					sub_Date={"February 16, 2025"}
					prize={"800,000BRD"}
					tags={["Original"]}
				/>
				<ContestItem
					image={"/Images/contest1.png"}
					name={"Days between us"}
					sub_Date={"February 16, 2025"}
					prize={"800,000BRD"}
					tags={["Original"]}
				/>
				<ContestItem
					image={"/Images/contest2.png"}
					name={"Grandma told me a dream"}
					sub_Date={"February 25, 2025"}
					prize={"900,000BRD"}
					tags={["Remix", "Rap"]}
				/>
				<ContestItem
					image={"/Images/contest3.png"}
					name={"Gangs in the Hood"}
					sub_Date={"February 25, 2025"}
					prize={"950,000BRD"}
					tags={["Remix", "Trap"]}
				/>
			</div>
		</div>
	);
}

export default Contests;
