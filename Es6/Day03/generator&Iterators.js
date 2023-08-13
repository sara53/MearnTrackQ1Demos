// /**
//  * == Iterator & generator
//  * == Proxy
//  * == Modulrity
//  * == OOP
//  */

// // console.log(arr[Symbol.iterator]);
// // let person = {
// // 	fname: "ali",
// // 	lname: "ahmed",
// // };

// // console.log(person);

// // for (let key of person) {
// // 	console.log(key);
// // }

// // let symbo.iteror = Symbol("age");

// // let person = {
// // 	fname: "ali",
// // 	[symbo.iteror]: function () {
// // 		console.log("Hello");
// // 	},
// // };
// // person[x]();
// // const iter = arr[Symbol.iterator]();
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // let arr = ["mona", "ali", "ahmed"];
// // arr[Symbol.iterator] = generateEven;

// // let person = {
// // 	fname: "ali",
// // 	lname: "ahmed",
// // 	age: 30,
// // };

// // person[Symbol.iterator] = myGen;

// // function* myGen() {
// // 	for (let key in this) {
// // 		yield { [key]: this[key] };
// // 	}
// // }

// // for (let x of person) {
// // 	console.log(x);
// // }
// // let result = myGen();
// // console.log(result.next());
// // console.log(result.next());
// // console.log(result.next());
// // function generateEven() {
// // 	let step = 0;
// // 	return {
// // 		next: function () {
// // 			step += 2;
// // 			if (step > 10) {
// // 				return {
// // 					value: undefined,
// // 					done: true,
// // 				};
// // 			} else {
// // 				return {
// // 					value: step,
// // 					done: false,
// // 				};
// // 			}
// // 		},
// // 	};
// // }

// // for (let i of person) {
// // 	console.log(i);
// // }

// // const iter = generateEven();
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());

// /**
//  * function return object
//  * object has next method
//  * next return {value,done}
//  *
//  */

// // let person = {
// // 	fname: "Ali",
// // 	display: function () {
// // 		console.log("1");
// // 	},
// // };

// // person.display = function () {};

// let arr = ["mona", "ali", "ahmed"];

// arr[Symbol.iterator] = getValue;
// function getValue() {
// 	let count = 0;
// 	return {
// 		next: () => {
// 			if (count == this.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: this[count++],
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }

// for (let value of arr) {
// 	console.log(value);
// }

// // const iter = getValue();
// // console.log(iter.next());
// //
