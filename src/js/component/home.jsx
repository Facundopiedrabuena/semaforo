
import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setselectedColor] = useState("");
	return (<div className="Traffic-light">
		<div
		 className={"light red " + (selectedColor === "red" ? "glow" : "")}
		 onClick={() => setselectedColor("red")}>

		 </div>
		 <div
		 className={"light yellow " + (selectedColor === "yellow" ? "glow" : "")}
		 onClick={() => setselectedColor("yellow")}>

		 </div>
		 <div
		 className={"light green " + (selectedColor === "green" ? "glow" : "")}
		 onClick={() => setselectedColor("green")}>

		 </div>
	</div>

	);
};

export default Home;
