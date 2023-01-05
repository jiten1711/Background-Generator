var col1 = document.getElementsByClassName("color1")[0];
var col2 = document.getElementsByClassName("color2")[0];
var css = document.querySelector("h3");
var body = document.getElementsByTagName("body")[0];


function changeBackground() {
	body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
	css.innerHTML = body.style.background + ";";
	// This will also work : 
	// css.textContent = body.style.background + ";";
}

col1.addEventListener("input", changeBackground);

col2.addEventListener("input", changeBackground);


// var newText = col1.value + "  " + col2.value;


// // function copyText() {
// // 	text1 = col1.value;
// // }

// function addTOH3(event) {
// 	if(event.which === 13)
// 		h3.innerHTML = newText;
// }


// body.addEventListener("keypress", addTOH3);
