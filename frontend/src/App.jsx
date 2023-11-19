import "./App.css";
import Project from "./Project";
//import EmployeeForm from "./EmployeeForm";

function App() {
	return (
		<div>
			<h1>Survey</h1>
			<Project
				title="Max's website"
				imageURL="https://cdn.pixabay.com/photo/2017/05/15/23/48/survey-2316468_1280.png"
			></Project>
			<Project
				title="Wendy's website"
				imageURL="https://www.designbombs.com/wp-content/uploads/2018/04/kuon-yagi.jpg"
			></Project>
		</div>
	);
}

export default App;
