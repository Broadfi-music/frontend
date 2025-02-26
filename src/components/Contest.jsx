import React from "react";
import ContestItem from "./ContestItem";
import "./styles/styles.css";

function Contest() {
	return (
		<div className="contest container mt-5">
			<h1>Contest</h1>
			<div className="row">
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
			<p className="more">View More Contests</p>
		</div>
	);
}

export default Contest;
