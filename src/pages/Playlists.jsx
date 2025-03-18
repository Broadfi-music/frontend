import { useState } from "react";
import "../Styles/playlists.css";
import Playlist_Component from "../components/Playlist_Component";

function Playlists() {
	const [image, setImage] = useState(null);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setImage(URL.createObjectURL(file));
		}
	};

	return (
		<div className="playlists container">
			<h1>Create Playlist</h1>
			<form action="#" className="create-playlist mb-5">
				<div className="image-uploader">
					{image ? (
						<>
							<img
								src={image}
								alt="Preview"
								className="image-preview"
							/>
							<label className="upload-button uploaded">
								Add image
								<input
									type="file"
									accept="image/*"
									className="file-input"
									onChange={handleImageChange}
								/>
							</label>
						</>
					) : (
						<label className="upload-button">
							Add image
							<input
								type="file"
								accept="image/*"
								className="file-input"
								onChange={handleImageChange}
							/>
						</label>
					)}
				</div>
				<div className="col">
					<input
						type="text"
						className="form-control upload"
						placeholder="Playlist Title..."
					/>
					<input
						type="text"
						className="form-control upload"
						placeholder="Music Link..."
					/>
					<div className="file-uploader">
						<label htmlFor="music-upload">Music File</label>
						<input
							type="file"
							id="music-upload"
							className="form-control file"
						/>
					</div>

					<p>
						Every playlist token price start with 20.0129, Every
						likes and engagement increase the token price. Every
						dislike reduces the token price.
					</p>
					<button className="btn btn-danger">Upload</button>
				</div>
			</form>
			<Playlist_Component />
		</div>
	);
}

export default Playlists;
