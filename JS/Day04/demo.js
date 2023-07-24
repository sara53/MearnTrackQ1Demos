/*
 * Events
 * -----------------------------
 *  1- add attribute on the elment
/* *****************************
 * == DOM
----------------- How to select element from Dom Object------------------
 == 1- getElementById --> return Element
 == 1- querySelector --> return Element
 == 2- getElementsByClassName --> return collection
 == 3- getElementsByTagName --> return collection
 == 4- getElementsByName --> return collection
 == 5- querySelectorAll --> return collection
 -----------------------------------------------
 document.body
 object.firstChild
 firstElementChild
 lastChild
 lastElementChild
 children
 childNodes
---------------------- Change Content From Dom -----------------------
    1- innerText
    2-innerHTML
    3-textContent
-----------------------Change Style -----------
 1- style Object
 2- className
 3- classList

 ----------------------- Attribute ----------------------
    1- getAttribute
    2- setAttribute
    3- hasAttribute
    4- removeAttribute
 ------------------------------
  1- createElement , createComment,createAttribute
 */

// var result = document.getElementsByName("choose");

// console.log(result[1].checked);
// for (var i = 0; i < result.length; i++) {
// 	console.log(result[i]);
// }
// var result = document.getElementsByTagName("a");
// var div = document.getElementById("content1");
// var result = document.getElementsByClassName("p1");

// console.log(result);
// console.log(result[0]);

// function show() {
// 	var result = document.getElementsByName("choose");
// 	for (var i = 0; i < result.length; i++) {
// 		if (result[i].checked) {
// 			console.log(result[i].value);
// 		}
// 	}
// }

// console.log(document.images);
// console.log(document.forms);
// var div = document.getElementById("content1");

// console.log(div.children);
// var result = document.querySelector("#content1");

// console.log(result);

// function changeContent() {
// 	var p = document.getElementsByClassName("myP")[0];
// 	// set
// 	// p.innerText = "<h1>Hello Mearn Track</h1>";
// 	// p.innerHTML = "<h1>Hello Mearn Track</h1>";
// 	// p.textContent; // search
// }

// function printName() {
// 	var input = document.getElementById("input1");
// 	var result = document.getElementById("result");
// 	result.innerHTML = input.value;
// 	// console.log(input.value); // get
// 	// input.value = 100; // set
// }

// function changeStyle() {
// 	var p = document.getElementById("myP");

// 	p.classList.toggle("jsClass");
// 	// p.classList.add("jsClass");

// 	// p.classList.remove("p1");
// 	// console.log(p.classList);
// 	// console.log(p.className); // get
// 	// p.className += " jsClass";
// 	// p.style.backgroundColor = "red";
// 	// p.style.padding = "30px";
// 	// p.style.color = "#fff";
// 	// p.style.display = "none";
// }

// var input = document.getElementById("input1");
// var img = document.images[0];
// function execute() {
// 	if (img.hasAttribute("class")) {
// 		img.removeAttribute("class");
// 	} else {
// 		img.setAttribute("class", "myClass");
// 	}
// 	// console.log(img.hasAttribute("class"));
// 	// img.setAttribute("src", "./Images/2.jpg");
// }
// console.log(input.getAttribute("value"));

/**
 * <p>Hello Mearn Track</p>
 *
 */
var result = document.getElementById("result");
function execute() {
	var p = document.createElement("p");
	var span = document.createElement("span");
	p.innerHTML = "Hello Mearn Track";
	span.innerHTML = "Hello span";

	p.setAttribute("class", "myP");
	result.before(p);
	// result.appendChild(p);
}
// var p = document.createElement("p");

// var myText = document.createTextNode("Hello Mearn Track");

// // var result = p.append(myText);
// // var result = p.appendChild(myText);
// // console.log(result);
// // p.appendChild("jjg");
// p.setAttribute("class", "myP");
// p.setAttribute("id", "p1");
// console.log(p);
