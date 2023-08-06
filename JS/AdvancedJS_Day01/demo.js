/**
 * This Pattern
 * Call
 * Bind
 * Apply
 * Clousre
 * Factory Pattern
 * Function Constructor
 *  -- Prototype Object
 * -------------------------
 */

// var fname = "ali";
// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "ahmed",
// 	lname: "mohamed",
// 	display: function () {
// 		getName();
// 	},
// };
// person.display();

// var person1 = {
// 	fname: "Ahmed",
// 	lname: "ali",
// 	display: function (x, y) {
// 		console.log(this.fname + " " + this.lname + " " + x + " " + y);
// 	},
// };

// var person2 = {
// 	fname: "Ola",
// 	lname: "fathy",
// };

// var result = person1.display.bind(person2);

// result("x", "Y");
// console.log(result);
//person1.display.call(person1, "Peter", 355);
// person1.display.apply(person2, [true, [1, 3, 4]]);

// var fname = "Mona";
// var person = {
// 	fname: "Ahmed",
// 	lname: "ali",
// 	display: function () {
// 		//this --> person
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**=================== */

// function greet() {
// 	var fname = "Mona";
// 	return function () {
// 		console.log("Hello " + fname);
// 	};
// }

// var result = greet();

// result();
/**==================== */

// function getArr() {
// 	var arr = [];

// 	for (let i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}

// 	return arr;
// }

// var result = getArr();

// result[0]();
// result[1]();
// result[2]();

// literal creation
// var product1 = {
// 	id: 2,
// 	productName: "sumsung",
// 	price: 200,
// 	discount: function () {
// 		return this.price * 0.1;
// 	},
// };
// var product2 = { id: 2, price: 100 };
// var product3 = { id: 2 };

// factory
// function product(id, productName, price) {
// 	return {
// 		id,
// 		productName,
// 		price,
// 		discount: function () {
// 			return this.price * 0.2;
// 		},
// 	};
// }

// var p1 = product(1, "Sumsung", 300);
// var p2 = product(2, "Book", 100);
// var p2 = product(2, "Book", 100);
// var p2 = product(2, "Book", 100);
// var p2 = product(2, "Book", 100);

// console.log(p1, p2);

// function Product(fname, lname) {
// 	this.fname = fname;
// 	this.lname = lname;
// }

// Product.prototype.test = "ali";
// // Product.prototype.display = function () {
// // 	console.log("fllfl");
// // };

// console.log(Product.prototype);
// var p1 = new Product("Mona", "Ali");

// p1.__proto__.display = function(){}
// p1.display();
// console.log(p1.test);
// console.log(Product.prototype.__proto__);
// console.log(p1.__proto__.__proto__);
// var p2 = new Product("ahmed", "Mohamed");

// let person = {};
// console.log();

// var arr = [];
// Array.prototype.push = function () {
// 	return;
// };
// console.log(Array.prototype);
// console.log(arr.__proto__);
