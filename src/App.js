import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [top, setTop] = useState(300);
	const [left, setLeft] = useState(900);
	const [yes, setYes] = useState(false);

	const btnStyle = {
		position: "absolute",
		top: `${top}px`,
		left: `${left}px`,
	};

	return (
		<div className="App">
			{!yes ? (
				<div>
					<h1>Will you go on a date with me?</h1>
					<button
						className="btn btn-green"
						onClick={() => setYes(true)}
					>
						Yes
					</button>
					<button
						className="btn btn-red"
						style={btnStyle}
						onMouseEnter={() => {
							setTop(
								Math.floor(
									Math.random() * 500
								) + 1
							);
							setLeft(
								Math.floor(
									Math.random() * 1400
								) + 1
							);
						}}
					>
						No
					</button>
				</div>
			) : (
				<div>
					<h1>yaay</h1>
					<img src="thirsty-cat.png" />
				</div>
			)}
		</div>
	);
}

export default App;
