(() => {
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector("puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		function createPuzzlePieces() {
			//debugger;
			pieces.forEach((piece, index) => {
				let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/$(piece + pictureIndex).jpg" alt="thumbnail"

				piecesBoard.innerHTML +- newPuzzlePiece;
			});
		}

		function resetPuzzlePieces() {
			//debugger;
		}

		puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces))


		createPuzzlePieces(0);

})();
