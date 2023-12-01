const drawButton = document.querySelector(".drawButton");

function drawANumber() {
	const min = Math.ceil(document.querySelector(".input-min").value);
	const max = Math.floor(document.querySelector(".input-max").value);

	const result = Math.floor(Math.random() * (max - min) + min);

	alert(result);
}

drawButton.addEventListener("click", drawANumber);
