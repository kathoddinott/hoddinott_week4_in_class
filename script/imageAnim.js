(() => {
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector("puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		function createPuzzlePieces() {
			//debugger;
			pieces.forEach((piece, index) => {
				let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail"`

				piecesBoard.innerHTML += newPuzzlePiece;
			});

			puzzleBoard.style,backgroundImages = `url(./images/backGround${pictureIndex}.jpg)`;
		
		}

		function initDrag() {
			piecesBBBoards.querySelectorAll('img').forEach(img => {
				img.addEventListener("dragstart", function(e) {
					console.log('draggin...')

					e.dataTransfer.setData("text/plain", this.id);
				});
			});
		}

		dropZones.forEach(zone => {
			zone.addEventListener("dragover", function(e) {
				e.preventDefault();
				console.log("you dragged over me!");
			});

			zone.addEventListener("drop", function(e) {
				e.preventDefault();
				console.log("you dropped sumpin on me");

				let piece = e.dataTransfer.getData("text/plain");
				e.target.appendChild(document.querySelector(`#${piece}`));
			});
		})



		function resetPuzzelPieces() {

		}
})();
