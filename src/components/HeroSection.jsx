import "./styles/hero.css";

function HeroSection() {
	return (
		<div className="hero-section">
			<div
				id="contestCarousel"
				class="container carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-item col active">
					<div className="text">
						<h2>GANG IN THE HOOD</h2>
					</div>
					<img src="/Images/placeholder image.jpg" alt="GANG IN THE HOOD" />
				</div>
				<div class="carousel-item col">
					<div className="text">
						<h2>TRENCHES AMONG ALL</h2>
					</div>
					<img src="/Images/hero3.png" alt="TRENCHES AMONG ALL" />
				</div>
				<div class="carousel-item col">
					<div className="text">
						<h2>LITTLE OLDIES WE ARE</h2>
					</div>
					<img src="/Images/hero1.png" alt="LITTLE OLDIES WE ARE" />
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#contestCarousel"
					data-bs-slide="prev"
				>
					<span
						class="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#contestCarousel"
					data-bs-slide="next"
				>
					<span
						class="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default HeroSection;
