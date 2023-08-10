/**
 * Object new syntax
 * Object.keys
 * Object.values
 * Object.entries
 * Object.assign
 *
 *
 */

// var fname = "ali";
// var lname = "ahmed";

// var myKey = "fname";

// let person = {
// 	[myKey]: "ali",
// 	lname,
// };
// let person = {
// 	fname,
// 	lname,
// 	display() {
// 		console.log("Hello");
// 	},
// };

// console.log(person);

// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	color: "red",
// };

// let result = Object.entries(person);
// console.log(result);

// let person1 = { fname: "ali", lname: "ahmed" };

// let person2 = { color: "red", fname: "alaa" };

// let result = Object.assign(person1, person2);

// console.log(person1);
// console.log(person2);
// console.log(result);
// console.log(target);
/*
function showDetails(options) {
	let defaultValues = {
		fname: "default fname",
		lname: "default lname",
		age: 0,
		address: "default address",
	};

	Object.assign(defaultValues, options);
	console.log(
		`fname : ${defaultValues.fname} 
    == lname : ${defaultValues.lname} == age: ${defaultValues.age} ,
    address : ${defaultValues.address}`
	);
}

showDetails({
	fname: "ali",
	lname: "Ahmed",
} );
*/
/**================== */
// function first() {
// 	console.log("first");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 3000);
// 	console.log("After settimeout");
// }
// first();
// console.log("Final");
/**========================== */

// setTimeout(() => {
// 	console.log("First");
// }, 3000);

// setTimeout(() => {
// 	console.log("Second");
// }, 2000);

// console.log("Final Log");
/**==================== */

// setTimeout(() => {
// 	console.log("Zero Time");
// }, 0);
// setTimeout(() => {
// 	console.log("2 seconds ");
// }, 2000);

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
/**============= */

// var x;

// setTimeout(() => {
// 	x = 10;
// }, 2000);
// console.log(x);

// var products;
/*
setTimeout(() => {
	products = [100, 200, 300, 400];
	setTimeout(() => {
		var product = {
			id: products[0],
			productName: "Book",
			price: 300,
			quantity: 20,
		};

		setTimeout(() => {
			let price = product.price;
			console.log(price);
		}, 500);
	}, 2000);
}, 3000);
*/

// function test(func1) {
// 	func1(
// 		function () {
// 			console.log("x1");
// 		},
// 		function () {
// 			console.log("y");
// 		}
// 	);
// }

// test(function (x, y) {
// 	x();
// 	y();
// });

/**
 * pending
 * fulfilled
 * rejected
 *
 */

/**
 *
 *
 *
 */

function getProductsList() {
	var myPromise = new Promise(function (x, y) {
		var products;
		setTimeout(() => {
			products = [100, 200, 300, 400];
			products ? x(products) : y("Error on getting products List");
		}, 2000);
	});

	return myPromise;
}

function getProduct(productId) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			var product = {
				id: productId,
				productName: "Book",
				price: 300,
			};
			product ? resolve(product) : reject("Error on getting product");
		});
	});
}

function getPrice(product) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let price = product.price;
			price ? resolve(price) : reject("Error on getting price");
		}, 500);
	});
}

console.log("-----------");
// getProductsList()
// 	.then((myProducts) => {
// 		return getProduct(myProducts[0]);
// 	})
// 	.then(function (product) {
// 		return getPrice(product);
// 	})
// 	.then(function (price) {
// 		console.log(price);
// 	})
// 	.catch((error) => console.log(error));

// async function execute() {
// 	try {
// 		let products = await getProductsList();
// 		let product = await getProduct(products[0]);
// 		let price = await getPrice(product);

// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

var result = fetch("https://jsonplaceholder.typicode.com/users");
// result
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => console.log(error));

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
