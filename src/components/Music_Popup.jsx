import { useRef, useState, useEffect } from "react";
import "./styles/music_popup.css";

function Music_Popup({ showPopup }) {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	// Play/Pause toggle
	const togglePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	// Handle seekbar change
	const handleSeek = (e) => {
		const seekTime = e.target.value;
		setCurrentTime(seekTime);
		audioRef.current.currentTime = seekTime;
	};

	// Set duration when metadata is loaded
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateDuration = () => setDuration(audio.duration);
		const updateTime = () => setCurrentTime(audio.currentTime);

		audio.addEventListener("loadedmetadata", updateDuration);
		audio.addEventListener("timeupdate", updateTime);

		return () => {
			audio.removeEventListener("loadedmetadata", updateDuration);
			audio.removeEventListener("timeupdate", updateTime);
		};
	}, []);

	// Play the song when showPopup becomes true
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		if (showPopup) {
			audio.play();
			setIsPlaying(true);
		} else {
			audio.pause();
			setIsPlaying(false);
		}
	}, [showPopup]);

	// Calculate progress percentage
	const progress = (currentTime / duration) * 100 || 0;

	return (
		<div className={showPopup ? "music_popup active" : "music_popup"}>
			<div className="container">
				<div className="text">
					<div className="img">
						<img
							src="/Images/placeholder image.jpg"
							alt="placeholder"
						/>
					</div>
					<div className="info">
						<div className="track-name-container">
							<h4 className="track-name">
								The love I have for you
							</h4>
						</div>
						<p>Lil Durk</p>
					</div>
				</div>
				<div className="seek">
					<audio
						ref={audioRef}
						src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
					></audio>

					<div className="controls">
						<button>
							<i className="fa-solid fa-backward"></i>
						</button>
						<button className="playBtn" onClick={togglePlayPause}>
							{isPlaying && showPopup ? (
								<i className="fa-solid fa-pause"></i>
							) : (
								<i className="fa-solid fa-play"></i>
							)}
						</button>
						<button>
							<i className="fa-solid fa-forward"></i>
						</button>
					</div>
					<div className="seek-bar">
						<span>{formatTime(currentTime)} </span>
						<input
							type="range"
							min="0"
							max={duration}
							value={currentTime}
							onChange={handleSeek}
							style={{
								background: `linear-gradient(to right, #E34830 ${progress}%,rgb(45, 45, 45) ${progress}%)`,
							}}
						/>
						<span>{formatTime(duration)}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Music_Popup;
