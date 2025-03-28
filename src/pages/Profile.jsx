import { useState } from "react";
import "../Styles/profile.css";
import Stats from "./profile/Stats";
import Tracks from "./profile/Tracks";
import Wallet from "./profile/Wallet";
import ProfileContent from "./profile/ProfileContent";

function Profile() {
	const [page, setPage] = useState("profile");
	const menuItems = [
		{ name: "Profile", title: "profile" },
		{ name: "Stats", title: "stats" },
		{ name: "Tracks", title: "tracks" },
		{ name: "Wallet", title: "wallet" },
	];

	return (
		<div className="container profile">
			<div className="menu">
				{menuItems.map((menuItem, index) => {
					return (
						<div
							className={
								page == menuItem.title
									? "menu-item active"
									: "menu-item"
							}
							key={index}
							onClick={() => setPage(menuItem.title)}
						>
							<img
								src={
									page == menuItem.title
										? `/Images/Icons/${menuItem.title}-active.png`
										: `/Images/Icons/${menuItem.title}.png`
								}
								alt={menuItem.name}
							/>
							{menuItem.name}
						</div>
					);
				})}
			</div>
			<div className="main">
				{page === "stats" ? (
					<Stats />
				) : page === "tracks" ? (
					<Tracks />
				) : page === "wallet" ? (
					<Wallet />
				) : (
					<ProfileContent />
				)}
			</div>
		</div>
	);
}

export default Profile;
