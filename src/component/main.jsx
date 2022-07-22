
import React, { useState } from "react"

// import css
import "./main.css"

// image
import loadingImage from "../assets/reload.png"

function Main(){

	const [advice, setAdvice] = useState()
	const [loading, setLoading] = useState(false);

    async function generateAdvice(){
    	setLoading(true)
    	const adviceGenerate = await fetch("https://api.adviceslip.com/advice");
    	const result = await adviceGenerate.json();
    	let adviceGenerated = result.slip.advice
    	setAdvice(currentState => adviceGenerated)
    	setLoading(false)
    }

    let adviceLoad = advice === undefined ? "Generated Advice appear here" : advice;

	return (

			<div>
				<div className="main--title">
					<h1>Advice Generator App</h1>
				</div>
				<div className="card">
				    <div className={loading ? "loading" : ""}>
				    	<div className={loading ? "loading-circle" : ""}>
							<div className="circle-1"></div>
							<div className="circle-2"></div>
							<div className="circle-3"></div>
						</div>
				    </div>
					<div className="card--content">
						<h2 className="advice-generated">"{adviceLoad}"</h2>
						<button className="card-generate-btn" onClick={generateAdvice}><img src={loadingImage} alt="Loading" /></button>
					</div>
					
				</div>	
			</div>

		)
}

export default Main;