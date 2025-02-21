import './styles/styles.css';

function Charts() {
    return (
		<div className="charts container">
			<h1>Charts</h1>
			<h3>Top remixed song</h3>
			<div className="top row">
				<div className="col-md-3">
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
				<div className="col-md-3">
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
				<div className="col-md-3">
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
		</div>
	);
}

export default Charts;