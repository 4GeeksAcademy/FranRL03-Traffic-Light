import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("red")

	const changeColor = () => {
		if (selectedColor === "red") {
		  setSelectedColor("green");
		} else if (selectedColor === "green") {
		  setSelectedColor("yellow");
		} else if (selectedColor === "yellow") {
		  setSelectedColor("red");
		}
	  };

	const purple = () => {

		if (document.querySelector(".purple").classList.contains("light"))
			document.querySelector(".purple").classList.remove("light")
		else
			document.querySelector(".purple").classList.add("light")
	}

	return (
		<div className="text-center">

			<h1 className="text-center mt-5">Traffic Light</h1>

			<button type="button" className="btn btn-primary mt-3 mb-3" onClick={purple}>Active/Disable Light Purple</button>
			<button type="button" className="btn btn-info mt-3 mb-3 ms-3" onClick={changeColor}>Change Color</button>


			<div className="traffic-light">
				<div onClick={() => setSelectedColor('red')} className={"light red" + (selectedColor === 'red' ? ' glow' : '')}></div>
				<div onClick={() => setSelectedColor('yellow')} className={"light yellow" + (selectedColor === 'yellow' ? ' glow' : '')}></div>
				<div onClick={() => setSelectedColor('green')} className={"light green" + (selectedColor === 'green' ? ' glow' : '')}></div>
				<div className="purple"></div>
			</div>

		</div>
	);
};

export default Home;
