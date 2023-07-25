/**************************
 * Events
 * 1- add attribute on the element
 * 2- attach function
 * 3- add Event Lisenter
 * ------------------------
 * BOM
 *   - Window
 *   - screen (Self Study)
 *   -- Navigator (self Study)
 *   -- History
 *   -- Location
 **************************/

// function changeStyle(color) {
// 	console.log("Hello");
// 	p.style.backgroundColor = color;
// }

// function execute() {
// 	changeStyle("red");
// }
// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", execute);

// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// var p = {
// 	fname: "ali",
// 	onclick: function () {
// 		console.log("first");
// 	},
// };

// person.onclick = function () {
// 	console.log("second");
// };
// person.onclick();

// function display(x) {
// 	console.log(x.fname);
// 	x.show();
// 	console.log("Hello display");
// }

// display({ fname: "ali", show: function () {} });
/**================== */
// var btn = document.getElementById("btn");
// var p = document.getElementById("p1");

// function changeContent() {
// 	p.innerHTML = "Mearn Track";
// }
// function changeStyle() {
// 	p.style.backgroundColor = "red";
// }
// btn.addEventListener("click", function () {
// 	p.innerHTML = "Mearn Track";
// });
// btn.addEventListener("click", function () {
// 	p.style.backgroundColor = "red";
// });

// btn.removeEventListener("click", function () {
// 	p.style.backgroundColor = "red";
// });

// btn.onclick = function (e) {
// 	console.log(e.target);
// 	p.innerHTML = "Mearn Track";
// };

/**===================== */

// function first() {
// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("second");
// }
// function third() {
// 	// e.stopPropagation();
// 	console.log("third");
// }

// var btn = document.getElementById("btn");
// var input = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input.addEventListener("focus", function (e) {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function (e) {
// 	input.style.border = "2px solid orange";
// });
// input.addEventListener("input", function (e) {
// 	if (e.target.value.length >= 3) {
// 		input.style.border = "2px solid green";
// 		errorMsg.style.display = "none";
// 	} else {
// 		input.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login");
// }
/**======== BOM
 * Window
 * ========== */
// var myWin;
// function openNewWinow() {
// 	myWin = window.open("./about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWin.close();
// }
// function moveToWindow() {
// 	myWin.moveTo(400, 400);
// }
// function moveByWinow() {
// 	myWin.moveBy(-100, -100);
// }
// function ResizeToWinow() {
// 	myWin.resizeTo(400, 400);
// }
// function ResizeByWinow() {
// 	myWin.resizeBy(100, 100);
// }

// setTimeout(function () {
// 	open("./about.html");
// }, 3000);

// var i = 0;

// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 3000);

// function downLink() {
// 	var p = document.getElementById("result");
// 	p.style.display = "block";
// 	setTimeout(function () {
// 		p.innerHTML = "www/google.com";
// 	}, 3000);
// }
/**============ */
// function execute() {
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// 	// location.href = "/about.html";
// 	// console.log(location.pathname);
// }
// function successFn(position) {
// 	console.log(position.coords.longitude);
// 	console.log(position.coords.latitude);
// 	console.log("Allow");
// }

// function errorFun() {
// 	console.log("Deny");
// }
// navigator.geolocation.getCurrentPosition(successFn, errorFun);
