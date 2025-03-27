import { useState } from "react";
import "../Styles/playlists.css";
import Podcast_Component from "../components/Podcast_Component";

function Podcasts() {
	const [image, setImage] = useState(null);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setImage(URL.createObjectURL(file));
		}
	};

	return (
		<div className="podcasts container mt-4">
			<h1>Create Podcast</h1>
			<form action="#" className="create-podcast mb-5">
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
						placeholder="Podcast Title..."
					/>
					<textarea
						type="text"
						className="form-control upload"
						placeholder="Description..."
					/>
					<div className="file-uploader">
						<label htmlFor="podcast-upload">Podcast File</label>
						<input
							type="file"
							id="podcast-upload"
							className="form-control file"
						/>
					</div>

					<p>
						You can add more audio files, podcast token price start
						from 1.230BRD
					</p>
					<button className="btn btn-danger">Upload</button>
				</div>
			</form>
			<Podcast_Component />
		</div>
	);
}

export default Podcasts;
