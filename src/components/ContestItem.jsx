

function ContestItem() {
	return (
		<div className="contestItem col-3">
			<img
				src="/public/Images/contest1.png"
				alt="Days between us Contest"
			/>
			<div className="text">
				<div className="tags">
					<div className="tag tag-green">Original</div>
				</div>
				<h3 className="name">Days between us</h3>
				<div className="col">
					<div className="sub">
						<p className="head">Submission Due:</p>
						<p>February 16, 2025</p>
					</div>
					<div className="price">
						<p className="head">PRIZE POOL:</p>
						<p>800,000BRD</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContestItem;
