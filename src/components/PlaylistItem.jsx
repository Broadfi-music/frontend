import { Link } from "react-router-dom";
import "./styles/styles.css";

function PlaylistItem({ name, price, mcap, listeners, tag, image }) {
	return (
		<Link className="col-3" to="/playlist">
			<div className="playlist">
				<img className="mb-4" src={image} alt="Top Playlist" />
				<div className="text">
					<div className="tag">{tag}</div>
					<div className="name">{name}</div>
					<div className="prize text-center">{price}</div>
					<div className="d-flex justify-content-between">
						<div className="col">
							<div>Mcap</div>
							<div>{mcap}</div>
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

export default PlaylistItem;
