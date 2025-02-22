import "./styles/styles.css";

function Charts() {
	return (
		<div className="charts container">
			<h1>Charts</h1>
			<h3>Top remixed song</h3>
			<div className="top-tracks row">
				<div className="col-3">
					<p className="chart_num">TOP 1</p>
					<img src="/Images/top1.png" alt="The grace remix" />
					<div className="text">
						<h4>The Grace Remix</h4>
						<p className="creator">By Trent</p>
						<div className="market">
							<p className="head">Market caps</p>
							<p>3,000,000BRD</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<p className="chart_num">TOP 2</p>
					<img src="/Images/contest2.png" alt="Grandma says remix" />
					<div className="text">
						<h4>Grandma says remix</h4>
						<p className="creator">By David</p>
						<div className="market">
							<p className="head">Market caps</p>
							<p>3,000,000BRD</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<p className="chart_num">TOP 3</p>
					<img src="/Images/top3.png" alt="Cyberpunk remix" />
					<div className="text">
						<h4>Cyberpunk</h4>
						<p className="creator">By Trent</p>
						<div className="market">
							<p className="head">Market caps</p>
							<p>3,000,000BRD</p>
						</div>
					</div>
				</div>
			</div>
			<div className="others">
				<div className="other">
					<div className="chart_num">4</div>
					<div className="name">The billions we make by Sharon</div>
					<div className="prize">2,150,000BRD</div>
				</div>
				<div className="other">
					<div className="chart_num">5</div>
					<div className="name">Pure Ways by Alex</div>
					<div className="prize">1,650,000BRD</div>
				</div>
			</div>

			<div className="creators mt-5">
				<h2>Top Creators</h2>
				<div className="row">
					<div className="creator col-md-3">
						<img src="/Images/cr1.png" alt="Top Creator 1" />
						<div className="text">
							<h2 className="chart_num">1</h2>
							<div className="name">Trent</div>
							<div className="prize">1,345,000BRD</div>
						</div>
					</div>
					<div className="creator col-md-3">
						<img src="/Images/cr2.png" alt="Top Creator 2" />
						<div className="text">
							<h2 className="chart_num">2</h2>
							<div className="name">Bubblegum</div>
							<div className="prize">1,200,000BRD</div>
						</div>
					</div>
					<div className="creator col-md-3">
						<img src="/Images/cr3.png" alt="Top Creator 3" />
						<div className="text">
							<h2 className="chart_num">3</h2>
							<div className="name">Smile</div>
							<div className="prize">1,150,000BRD</div>
						</div>
					</div>
				</div>
				<div className="others cr">
					<div className="d-flex justify-content-between head">
						<h4>Rank</h4>
						<h4>Earnings</h4>
					</div>
					<div className="other cr d-flex justify-content-between">
						<div className="col">
							<h3 className="chart_num">4</h3>
							<img src="/Images/cr4.png" alt="Top creator 4" />
							<div className="name">Mary stugger</div>
						</div>
						<div className="prize">650,000BRD</div>
					</div>
					<div className="other cr d-flex justify-content-between">
						<div className="col">
							<h3 className="chart_num">5</h3>
							<img src="/Images/cr5.png" alt="Top creator 4" />
							<div className="name">Jack Rugger</div>
						</div>
						<div className="prize">632,000BRD</div>
					</div>
					<div className="other cr d-flex justify-content-between">
						<div className="col">
							<h3 className="chart_num">6</h3>
							<img src="/Images/cr6.png" alt="Top creator 4" />
							<div className="name">Shalom Hail</div>
						</div>
						<div className="prize">550,000BRD</div>
					</div>
				</div>
			</div>
			<h4 className="more">View More</h4>
		</div>
	);
}

export default Charts;
