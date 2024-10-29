import React from "react";
import { Counter } from "./counter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({timer}) => {
	return (
		<div className="contenedor">
			<div className="text-center d-flex ">
				<Counter timer={timer} />
			</div>
		</div>
	);
};

export default Home;
