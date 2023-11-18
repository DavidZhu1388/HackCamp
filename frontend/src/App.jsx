import "./App.css";
import Project from "./Project";

function App() {
	return (
		<div>
			<h1>Projects</h1>
			<Project
				title="Max's website"
				imageURL="https://uploads.sitepoint.com/wp-content/uploads/2019/04/155530806117.jpg"
			></Project>
			<Project
				title="Wendy's website"
				imageURL="https://www.designbombs.com/wp-content/uploads/2018/04/kuon-yagi.jpg"
			></Project>
		</div>
	);
}

export default App;
