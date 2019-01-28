(() => {
	let theButton = document.querySelector("#buttonHolder img");
	window.addEventListener("load", changeHeaderText);

	function changeHeaderText() {
		document.querySelector("h1").textContent = "hey there from js"
	}
	// set up the puzzle pieces and boards
	theButton.addEventListener("click", changeHeaderText);
	
})();
