import { Link } from "react-router-dom";
import "./styles/styles.css";

function ContestItem({ name, image, sub_Date, prize, tags }) {
	return (
		<div className="contestItem col-3">
			<Link to={"/contest"}>
				<img src={image} alt={name} />
				<div className="text">
					<div className="tags">
						{tags.map((tag, index) => {
							return (
								<div
									className={
										tag === "Original"
											? "tag tag-green"
											: tag === "Remix"
											? "tag tag-yellow"
											: "tag tag-red"
									}
									key={index}
								>
									{tag}
								</div>
							);
						})}
					</div>
					<h3 className="name">{name}</h3>
					<div className="col">
						<div className="sub">
							<p className="head">Submission Due:</p>
							<p>{sub_Date}</p>
						</div>
						<div className="price">
							<p className="head">PRIZE POOL:</p>
							<p>{prize}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ContestItem;
