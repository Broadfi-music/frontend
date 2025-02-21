import React from "react";
import ContestItem from "./ContestItem";
import "./styles/styles.css";

function Contest() {
	return (
		<div className="contest container">
			<h1>Contest</h1>
			<div className="row">
				<ContestItem />
				<ContestItem />
				<ContestItem />
			</div>
            <p className="more">View More Contests</p>
		</div>
	);
}

export default Contest;
