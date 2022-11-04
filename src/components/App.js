import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles"
import Filter from "./Filter"

import porkerData from "../porkers_data";

// App
// 	- HogList
// 		-HogCard

function App() {
	const [hogs, setHogs] = useState(porkerData)
	const[showGreased, setShowGreased] = useState(null)

	const filterGreased = () => {
		// take in the hogs array, and return the filtered of greased or not greased
		// Three different returns
		// ALL PIGS => state is empty
		// ONLY GREASED => state === "GREASED"
		// ONLY NOT GREASED => state === "NOT GREASED"

		switch (showGreased) {
			case "GREASED":
				return hogs.filter((hog) => hog.greased)
			case "NOT":
				return hogs.filter((hog) => !hog.greased)
			default:
				return hogs
		}
	}

	
	return (
		<div className="App" >
			<Nav />
			<Filter showGreased={showGreased} setShowGreased={setShowGreased}/>
			<br></br>
			<HogTiles hogs={porkerData}/>
		</div>
	);
}

export default App;
