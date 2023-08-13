console.log("-------");
// class Person {
// 	// #id;
// 	constructor(fname, lname, age) {
// 		// if ( this.constructor === Person ) {
// 		//     throw "Abstract Class"
// 		// }
// 		// this.#id = id;
// 		this.fname = fname;
// 		this.lname = lname;
// 		// this.age = age;
// 	}

// 	static display() {
// 		console.log(`Hello Static Method`);
// 	}

// 	// get getId() {
// 	// 	return this.#id;
// 	// }
// 	// set setId(value) {
// 	// 	this.#id = value;
// 	// }
// }

// let p = new Person(34, "alaa", "ali", 567);
// Person.display();

// p.setId = "new Id";
// console.log(p.getId);
// console.log(p.getId());
// p.setId("new Id");
// console.log(p.getId());
// class User extends Person {
// 	constructor(fname = "", lname = "", age = "", password = "") {
// 		super(fname, lname, age);
// 		this.password = password;
// 	}

// 	display() {
// 		console.log(`${this.fname} , password : ${this.password}`);
// 	}
// }

// let myUser = new User("tarek", "ali", 12, "TAREKali");

// console.log(myUser.fname);
/**--------------------- */
// import * as all from "./main.js";

// console.log(all.add(4, 6));
// console.log(all.execute(4, 6));
// console.log(all.fname);
// console.log(all.default());
// console.log(add(3, 4));
// console.log(execute());
// console.log(show2());

// console.log(fname);

let person = {
	fname: "Ali",
	age: 20,
};

let handler = {
	get: function (target, prop) {
		if (!(prop in target)) throw "Prop not Found";
		return target[prop];
	},
	set: function (target, prop, value) {
		if (prop == "age" && value < 0) {
			throw "Can't set negative value";
		}
		target[prop] = value;
		return true;
	},
};

let myProxy = new Proxy(person, handler);
myProxy.fname = "mearn";
// myProxy.age = -30;
// myProxy.fname = "dd";
console.log(myProxy.fname);
// myProxy.fname = "pet";
// console.log(myProxy.fname);
// console.log(myProxy.fname);
// console.log(myProxy.age);
// console.log(myProxy.color);
