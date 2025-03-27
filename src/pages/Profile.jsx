import "../Styles/profile.css";

function Profile() {
	const [page, setPage] = "profile";
	const menuItems = [
		{ name: "Profile", title: "profile" },
		{ name: "Stats", title: "stats" },
		{ name: "Tracks", title: "tracks" },
		{ name: "Wallet", title: "wallet" },
	];
	console.log(page);

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
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ducimus odio corrupti harum tenetur in aperiam beatae
				voluptatibus architecto laudantium blanditiis deserunt amet sint
				natus dolorum, quasi nulla, consequuntur, voluptatum ab?
			</div>
		</div>
	);
}

export default Profile;
