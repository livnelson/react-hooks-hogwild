import { useState } from "react"

const HogTile = ({
	hog: { name, image, weight, greased, specialty, medal }}) => {
	
    // INSTEAD OF: 
    // const hog = props.hog
	// const name = props.hog.name
	// const image = props.hog.image

	const [showDetails, setShowDetails] = useState(false)
	// const [hideDetails, setHideDetails] = useState(true)

	const toggleDetails = (e) => {
		console.log("CLICKED")
		// setShowDetails(!showDetails)
		setShowDetails((prevState) => !prevState)
	}


// THIS LAYOUT SHOWS THE DETAILS ABOVE THE IMAGE
    return (
		<div>
			<h1>{name}</h1>
            {/* if something is true, show the details, if not, show nothing */}
			{showDetails ? (
			  <div>
                <p>
                  {weight} / {specialty} / {greased ? "GREASED" : "NOT GREASED"} / {" "}
                  {medal}
                </p>
			  </div>) : null}
            <br></br>
			<img
				src={image}
				alt={name}
				height="300"
				width="300"
                onClick={toggleDetails}
			/>
		</div>
	)


    // THIS LAYOUT SHOWS THE DETAILS BELOW THE IMAGE
	// return (
	// 	<div>
	// 		<h1>{name}</h1>
	// 		<img
	// 			src={image}
	// 			alt={name}
	// 			height="300"
	// 			width="300"
	// 			onClick={toggleDetails}
	// 		/>

	// 		{/* if something is true, show the details, if not, show nothing */}
	// 		{showDetails ? (
	// 			<div>
	// 				<p>
	// 					{weight} / {specialty} / {greased ? "GREASED" : "NOT GREASED"} /{" "}
	// 					{highest_medal_achieved}
	// 				</p>
	// 			</div>
	// 		) : null}
	// 	</div>
	// )
}

export default HogTile