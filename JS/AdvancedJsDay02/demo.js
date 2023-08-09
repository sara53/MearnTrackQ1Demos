// function Person(fname, lname, age) {
// 	if (this.constructor === Person) {
// 		throw "No Object";
// 	}
// 	this.fname = fname || "";
// 	this.lname = lname;
// 	this.age = age;
// }
// Person.prototype.display = function () {
// 	throw "Method not implemented";
// };

// function User(fname, lname, age, password) {
// 	Person.call(this, fname, lname, age);
// 	this.password = password;
// }

// User.myStaticMethod = function () {
// 	console.log("Welcome Static Method");
// };

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;

// User.prototype.display = function () {
// 	console.log("Display from User");
// };
// User.prototype.clcAge = function () {
// 	console.log("Hello From Clc Age");
// };

// var myUser = new User("Ola", "ahmed", 40, "OLAali");
// myUser.display();
// myUser.clcAge();
// User.myStaticMethod();
/**=========== */

// let product = {
// 	id: 2,
// 	productName: "Book",
// 	price: 400,
// };

// Object.defineProperty(product, "color", {
// 	value: "red",
// 	writable: true,
// 	configurable: false,
// 	enumerable: false,
// });

// Object.defineProperties( product, {
//     color: {

//     },
//     show: {

//     }
// });

//delete product.color; // delete
//product.color = "green"; // set

// console.log(product);
// for (var i in product) {
// 	console.log(product[i]);
// }

// function Show() {
// 	var myId = "1234"; // private
// 	this.open = true;
// 	this.id = 1233;
// 	Object.defineProperty(this, "saad", {
// 		get: function () {
// 			return myId;
// 		},
// 		set: function (value) {
// 			myId = value;
// 		},
// 	});
// }

// var c1 = new Show();
// c1.saad = "new value ya saad";

// console.log(c1.saad);
