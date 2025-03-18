import { motion } from "motion/react";
import "../Styles/welcome.css";

function Welcome() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1, 
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { translateY: 60, opacity: 0 },
		show: {
			translateY: 0,
			opacity: 1,
			transition: { type: "spring", bounce: 0.5 },
		},
	};

	return (
		<div className="welcome">
			<div className="hero overflow-hidden">
				<motion.h1
					className="text-center header"
					initial={{ translateY: 100, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
					viewport={{ once: true }}
				>
					Come join the{" "}
					<span>
						movement
						<img src="/Images/Icons/loader.png" alt="loader" />
					</span>
					<br /> with BroadFi.
				</motion.h1>
				<motion.a
					href="/homepage"
					className="btn btn-danger"
					initial={{ translateY: 30, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<img src="/Images/Icons/headphones.png" alt="headphones" />
					Launch App
				</motion.a>
			</div>
			<motion.div
				className="what-is container"
				initial={{ translateY: 30, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ type: "spring", bounce: 0.3, delay: 0.5 }}
				viewport={{ once: true }}
			>
				<h2>What is BroadFi?</h2>
				<p>
					BroadFi is an innovative gamified SocialFi platform that
					revolutionizes audio content engagement. It empowers
					creators and users through gamified remix challenges,
					decentralized voting, and revenue-sharing models. By staking
					tokens, users vote for their favorite remixes and earn
					rewards from the content they listen to, fostering a
					collaborative and rewarding ecosystem for creators,
					listeners, and investors alike.
				</p>
			</motion.div>
			<motion.div
				className="problem container"
				initial={{ translateY: 40, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<h6 className="tagline">The problem</h6>
				<h2>The issue we're trying to solve.</h2>
				<p>
					The traditional music and podcasting industries often lack
					transparency and equitable revenue-sharing mechanisms.
					Creators struggle to monetize their content effectively,
					while listeners rarely benefit from their engagement.
					Moreover, platforms seldom offer interactive gamified
					challenges that incentivize community participation and
					creativity.
				</p>
			</motion.div>
			<motion.div
				className="solution container"
				initial={{ translateY: 40, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<h6 className="tagline">The solution</h6>
				<h2>How we will solve that</h2>
				<p>
					BroadFi bridges the gap by creating a decentralized platform
					where creators can engage in gamified remix and podcast
					challenges, while listeners actively participate by voting
					and staking tokens.
				</p>
			</motion.div>

			<motion.div
				className="choice container"
				initial={{ translateY: 50, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ type: "spring", bounce: 0.7, delay: 0.3 }}
				viewport={{ once: true }}
			>
				<div className="text">
					<h6 className="tagline">Why choose us?</h6>
					<h2>How BroadFi works</h2>
					<p className="mt-1">
						BroadFi allows creators to participate in remix or
						podcast challenges by submitting their work. Users stake
						tokens to vote for their favorite content, determining
						the winner.
					</p>
				</div>
				<div className="image">
					<img src="/Images/welcome-illustration.png" alt="Welcome" />
				</div>
			</motion.div>

			<div className="features container text-center">
				<h6 className="tagline">What Broadfi offers</h6>
				<h2>Why use BroadFi?</h2>
				<motion.div
					className="row"
					initial="hidden"
					whileInView="show"
					variants={container}
                    viewport={{once: 'true'}}
				>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/cpu.png"
							alt="Gamified Remix and Podcast Challenges"
						/>
						<h4>Gamified Remix and Podcast Challenges</h4>
						<p>
							Encourages creativity and competition among
							creators.
						</p>
					</motion.div>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/archive.png"
							alt="Decentralized Voting System"
						/>
						<h4>Decentralized Voting System</h4>
						<p>
							Users stake tokens to vote for their favorite
							content.
						</p>
					</motion.div>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/dollar-sign.png"
							alt="Revenue Sharing"
						/>
						<h4>Revenue Sharing</h4>
						<p>
							Staked tokens allow listeners to earn a share of
							revenue generated by played content.
						</p>
					</motion.div>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/bar-chart.png"
							alt="Top Chart Trends"
						/>
						<h4>Top Chart Trends</h4>
						<p>
							Highlights the most popular remixes and podcasts
							voted by the community.
						</p>
					</motion.div>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/droplet.png"
							alt="Tokenized Economy"
						/>
						<h4>Tokenized Economy</h4>
						<p>
							Drives platform engagement and rewards users for
							participation.
						</p>
					</motion.div>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/user.png"
							alt="Creator Dashboard"
						/>
						<h4>Creator Dashboard</h4>
						<p>Provides analytics and insights for creators.</p>
					</motion.div>
					<motion.div
						className="feature col-3"
						
						variants={item}
					>
						<img
							src="/Images/Icons/link.png"
							alt="On-Chain Transparency"
						/>
						<h4>On-Chain Transparency</h4>
						<p>Ensures secure and verifiable transactions.</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Welcome;
