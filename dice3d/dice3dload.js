loadDice();

function loadDice() {
	let dice = document.getElementsByClassName("die");
	
	for (let die of dice) {
		let cube = document.createElement("div");
		cube.className = "cube";

		for (let i = 0; i < 6; i++) {
			let face = document.createElement("div");
			face.className = ["front", "back", "right", "left", "top", "bottom"][i];
			for (let j = 0; j <= i; j++) {
				let dot = document.createElement("span");
				dot.className = `dot dot${j+1}`;
				face.appendChild(dot);
			}
			cube.appendChild(face);
		}

		cube.onclick = () => {
			rollCube(cube);
		}

		die.appendChild(cube);

		die.roll = () => {
			rollCube(cube);
		}
	}
}