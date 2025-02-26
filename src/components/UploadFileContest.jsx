import React from "react";
import { useState } from "react";

function UploadFileContest() {
	const [image, setImage] = useState(null);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setImage(URL.createObjectURL(file));
		}
	};

	return (
		<form className="contest-upload" action="#">
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
					placeholder="Song Title..."
				/>
				<div className="file-uploader">
					<input type="file" className="form-control file" />
				</div>
				<p>
					Every song token price start with 0.000789BRD. Every
					LIKES,VOTE increase the token price why dislike decreases
					it.
				</p>
				<button className="btn btn-danger">Upload</button>
			</div>
		</form>
	);
}

export default UploadFileContest;
