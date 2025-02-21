import "./styles/hero.css";

function HeroSection() {
	return (
		<div className="hero-section">
			<div className="container row">
				<div className="col-3 col">
					<div className="text">
						<h2>GANG IN THE HOOD</h2>
					</div>
					<img src="/Images/hero2.png" alt="GANG IN THE HOOD" />
				</div>
				<div className="col-3 col">
					<div className="text">
						<h2>TRENCHES AMONG ALL</h2>
					</div>
					<img src="/Images/hero3.png" alt="TRENCHES AMONG ALL" />
				</div>
				<div className="col-3 col">
					<div className="text">
						<h2>LITTLE OLDIES WE ARE</h2>
					</div>
					<img src="/Images/hero1.png" alt="LITTLE OLDIES WE ARE" />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
