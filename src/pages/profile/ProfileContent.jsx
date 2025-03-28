import React from "react";

function ProfileContent() {
	return (
		<div className="profile-content">
			<h1 className="m-3">Profile</h1>
			<div className="pic">
				<img
					src="/Images/Icons/placeholder-profile.png"
					alt="Profile Pic"
				/>
				<button className="btn btn-danger">Change Picture</button>
				<button className="btn btn-danger remove">
					Remove Picture
				</button>
			</div>
			<div className="fields">
				<div className="form-group">
					<div className="name">
						<label htmlFor="name">Profile Name</label>
						<input
							type="text"
							id="name"
							className="form-control"
							placeholder="Enter profile name here"
						/>
					</div>
					<div className="icon-overlay left">
						<label htmlFor="username">Username</label>
						<div className="input">
							<img src="/Images/Icons/at-sign.png" alt="@" />
							<input
								type="text"
								id="username"
								className="form-control"
								placeholder="doelingo22"
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="field">
						<label htmlFor="type-select">User Type</label>
						<div className="icon-overlay right">
							<select
								className="form-control"
								name="User Type"
								id="type-select"
							>
								<option value="Member">Member</option>
								<option value="Creator">Creator</option>
							</select>
							<img src="/Images/Icons/chevron-down.png" />
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="field">
						<label htmlFor="bio">About Me</label>
						<textarea
							className="form-control"
							name="Bio"
							id="bio"
							placeholder="A little about yourself, hobbies or whatever..."
						></textarea>
					</div>
				</div>
			</div>
			<button className="btn btn-danger mt-3 saveBtn">
				<img src="/Images/Icons/check.png" alt="Save Changes" />
				Save Changes
			</button>
		</div>
	);
}

export default ProfileContent;
