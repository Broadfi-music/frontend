import { Link } from "react-router-dom";
import "./styles/styles.css";

function PodcastItem({ name, price, listeners, image, creator_img }) {
	return (
		<Link className="col-3 podcast" to="/podcast">
			<div className="playlist">
				<img className="mb-4" src={image} alt={name} />
				<div className="text">
					<div className="creator">
						<img src={creator_img} alt={name} />
						<div className="name">{name}</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="col">
							<div>Token Price</div>
							<div className="prize">{price}</div>
						</div>
						<div className="col">
							<div>Listeners</div>
							<div>{listeners}</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PodcastItem;
