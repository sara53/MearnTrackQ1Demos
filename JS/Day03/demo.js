/**
 * == Function Executions In Memeory
 *  == Shadwing
 * == global Scope VS Local Scope (in memeory)
 * == what is an object [definition .. access(dotnet,subscribt)]?
 * == (Window Object overview and this)
 * == What is Dom Tree ?
 * == Dom
 *  -- How to Select Element From the Dom
 *
 */

// var test = "mona";
// function sayHello() {
// 	console.log(a);
// 	var a = 5;
// 	var b = 6;
// 	console.log(a);

// 	return a + b;
// }

// var result = sayHello();
// console.log(result);
/**
 * ali ali
 *
 *
 */

// var test = "Mohmed";

// function sayHello() {
// 	test = "ali";
// 	console.log("Welcome From ITI");
// 	return "Track Opened At July";
// }

// function greet(trackName) {
// 	var test = "mona";
// 	console.log(test);
// 	sayHello();
// 	console.log(test);
// 	return "Welcome " + trackName;
// }

// var result = greet("Open Source");

// console.log(test);
// console.log(result);
/**===================
 * Properties (key:value[any datatype])
 * Methods
 *--------------------
  == Dot Notation
  == subscript Notation
 *
 *   ================== */

// var student = {
// 	fname: "ali",
// 	lname: "alaa",
// 	age: 20,
// 	address: {
// 		city: "benha",
// 		street: "Saad Street",
// 		code: 123,
// 	},
// };
// console.log(student.address["code"]);
// console.log(student["address"].code);
// console.log(student.address.code);
// console.log(student["address"]["code"]);
// student.colors.push("alaa");

// console.log(student.colors);
// for (var i = 0; i < student.colors.length; i++) {
// 	console.log(student.colors[i]);
// }
// delete student.fname;

// console.log(student);
// student["fname"] = "alaa";
// student["test"] = "new ";
// console.log(student);
// // get
// console.log(student["fname"]);
// console.log(student["age"]);
// console.log(student.test);
// console.log(student.fname);

// set
// student.test = "Hello";
// student.fname = "alaa";
// console.log(student);
// // get
// console.log(student1.fname);

// // age
// console.log(student2.age);
/**===================== */

// var student = {
// 	fname: "ali", // property
// 	lname: "alaa",
// 	// method
// 	display: function () {
// 		console.log("Hello Display Function");
// 	},
// };

// student.display();
// console.log();

// var str = "Hello from iti";

// str.charAt();

// var arr = [];

// arr.push()

// console.log(window);

// alert("alld"); // window.alert()

// window.alert("fkfk");

// console.log(window);
// console.log(this);

// var fname = "ali";

// console.log(window.fname);

// // getName();
// window.getName();
// function getName() {
// 	console.log("Hello get Name");
// }
// console.log(fname);

// console.log(window);

var fname = "mona";

function getName() {
	console.log(this.fname);
}
/**
 * this ==> window
 *    ==> student
 *
 * this=> window
 */
// var student = {
// 	fname: "ali",
// 	lname: "alaa",
// 	display: function () {
// 		console.log(this.fname);
// 		getName();
// 	},
// };

// student.display();
/**
 * advanced JS
 *
 */
/**
 * mona
 * ali
 * undefined
 *
 */
