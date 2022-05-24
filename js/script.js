// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function repeatSentence() {
  	// initialize the counter
	let counter = 0
	
	// initialize the final sentence display
	let finalSentences = ""
	
	// get how many times to repeat
	let sentence = document.getElementById('userSentence').value
	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	

	// use a do..while loop to create the final sentence display
	do {
		// build the string of sentences
		finalSentences = finalSentences + sentence + "<br>"
		
		//increment the counter
		counter = counter + 1
	} while (counter < userNum)

  	// return the string of sentences back to html
  	document.getElementById('display-results').innerHTML = finalSentences
}
