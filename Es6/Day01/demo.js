/**Agenda
 *---------------
   == let -- var -- const 
   == pass by Value VS Pass By Reference
   == spread operator 
   == Rest Parms
   == destructuring
   == Arrow Function
   == String Literal
   == Array API
 */

/**
 * var
 * ------
 * == reassign
 * == redeclartion
 * == added to window object
 * == Hoisting
 * == function scope
 * -------------------------------
 * == let
 * -- reassign
 * -- can't redeclare
 * -- can't Hoisting
 * -- not added to window object
 * -- block scope
 * -----------------------------
 * const
 * -- can't reassign
 * -- can't redeclare
 * -- can't Hoisting
 * -- not added to window object
 * -- block scope
 */

// let fname = "mona";
// console.log(window.fname);

// function print() {
// 	let test = "ali";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}
// 	// console.log("i outside loop ", i);
// }

// print();

// const arr = [12, 30, 40];

// arr.push("new Value");

// arr = "ali";
// console.log(arr);

/**========================= */
// var a = 3;
// var b = a;
// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);
/**------------------------------- */

// let arr1 = [10, 20, 30, 50];
// let arr2 = [true, false, ...arr1, "alia"];

// arr1.push("new value");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);
// let person1 = { fname: "ali", lname: "ahmed" };
// let person2 = { ...person1, key: "hello" };
// person2.color = "red";

// console.log(person1);
// console.log(person2);

// let arr = [10, 20, 40, 1, 66];

// console.log(Math.min(...arr));
/**-------------------------------- */

// function getArr(a) {
// 	return [a, 20, 40];
// }

// let [x, y] = getArr("ali");
// console.log(x);
// let arr = [20, "mona", "alaa"];
// let [x, , z] = arr;
// arr[0] = "abdo";
// console.log(x);

// console.log(arr);

// let person = {
// 	fname: "ali",
// 	lname: "peter",
// 	color: "blue",
// 	product: [10, 20],
// };

// let { product } = person; // syntax suger

// // let x = person.fname;
// // let y = person.lname;

// console.log(product);
/**-------------------------------------- */

// function show(...w) {
// 	console.log(w);
// 	console.log(arguments);
// }

// show(10, 20, 40, 50);
/**================ */

// let str1 = "             hello from iti";
// let str2 = ":(";
// console.log(`Hello from js ${str1.toUpperCase()} ${str2}`);
/**------------------- */
// function add(x = 0, y = 0) {
// 	return x + y;
// }

// let add2 = function (x, y) {
// 	return x + y;
// };
// let add3 = (x = 0, y = 0) => {
// 	console.log("From add3");
// 	return x + y;
// };

// var result = add3(40, 50);
// console.log(result);

// this -- window
// var fname = "ali";
// let getName = () => {
// 	console.log(this.fname);
// };

// let person = {
// 	fname: "ahmed",
// 	display: getName,
// };

// person.display();
// this --> window

// var fname = "Alaa";
// let person = {
// 	fname: "Ola",
// 	display: function () {
// 		setTimeout(function () {
// 			console.log("dd");
// 		}, 2000);
// 	},
// };

// person.display();
/**============== Array API
 * map
 * filter
 * find
 * findIndex
 * some
 * every
 * foreach
 *  ========= */

// function findElement() {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 15) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }

// let result = findElement();
// console.log(result);

// function show(x, y, z) {
// 	console.log("X : ", x);
// 	console.log("Y : ", y);
// 	console.log("Z : ", z);
// }

// for (let i = 0; i < arr.length; i++) {
// 	show(arr[i], i, arr);
// 	console.log("===============");
// }
/**=========== */
// var arr = [10, 20, 40, 64];
// let result = arr.findIndex((item) => item > 20);

// console.log(result);

// var tracks = ["SD", "OS", "Front", "Mearn", "PHP"];

// var result = tracks.map((track) => `<div>${track}</div>`);

// console.log(result);

// let products = [
// 	{
// 		id: 1,
// 		productName: "Book",
// 		price: 200,
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		productName: "Pen",
// 		price: 200,
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		productName: "Phone",
// 		price: 200,
// 		cat: "Elect",
// 	},
// 	{
// 		id: 4,
// 		productName: "window",
// 		price: 200,
// 		cat: "Furnit",
// 	},
// ];

// let result = products.filter((product) => product.id != 1);
// console.log(result);
var tracks = ["SD", "SOS", "SFront", "Mearn", "SPHP"];

var result = tracks.every((track) => track.startsWith("S"));
console.log(result);
// var result = tracks.foreach((track, index) => {
// 	console.log(`${index} : ${track}`);
// });

// console.log(result);
