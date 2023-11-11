import { useState } from "react";
import "./App.css";

function Project(props) {
	let [liked, setLiked] = useState(false);

	return (
		<>
			<h3>{props.title}</h3>
			{liked && <p>I like {props.title}</p>}
			<img
				src={props.imageURL}
				style={{ width: "60vw" }}
				onClick={() => setLiked(!liked)}
			></img>
		</>
	);
}

export default Project;
