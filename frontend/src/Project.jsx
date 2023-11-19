import { useState } from "react";
import "./App.css";

function Project(props) {
	let [liked, setLiked] = useState(false);

	return (
		<div className="project-container">
			<img
				src={props.imageURL}
				alt={props.title}
				className="project-image"
				style={{ width: "60vw" }}
				onClick={() => setLiked(!liked)}
			></img>
			<h3>{props.title}</h3>
			{liked && <p>I like {props.title}</p>}
		</div>
	);
}

export default Project;
