import { useState } from "react";
import Podcast_Component from "../components/Podcast_Component";
import Music_Popup from "../components/Music_Popup";
import "../Styles/playlists.css";

function Podcasts() {
	const [image, setImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setImage(URL.createObjectURL(file));
		}
	};

	return (
		<>
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
						<div className="music">
							<input
								type="text"
								className="form-control upload"
								placeholder="Music Link..."
							/>
							<button className="btd btn-danger">Add</button>
						</div>
						<p>
							You can add more audio files, podcast token price
							start from 1.230BRD
						</p>
						<button className="btn btn-danger">Upload</button>
					</div>
				</form>
				<Podcast_Component />
			</div>
			<Music_Popup showPopup={showPopup} />
		</>
	);
}

export default Podcasts;
