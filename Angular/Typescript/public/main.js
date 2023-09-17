/*datatype

== string
== number
== boolean
==undefined
== null
== any

-----------------------------
-- vairables
== array



*/
// var fname: any = 10;
// fname = "ali";
// console.log(fname);
// var num: number = "mona";
// var test: string;
// test = "ali";
// console.log(test);
// var fname;
// fname = "mona";
// fname = 20;
// console.log(fname);
// type stringOrNumber = string | boolean;
// var fname: stringOrNumber = "mona";
// var num: stringOrNumber = 20; // error
// fname = 30;
// fname = true; //
// console.log(fname);
// type stringOrNumber = string | number;
// var arr = ["mona", 30];
// arr.push("LI");
// arr.push(40);
// console.log(arr);
// arr.push("ali");
// arr.push("mona");
// arr.push(40);
// arr.push(true);
// var fname: any = "mona";
// tuple
// let arr: [string, number] = ["mona", 30];
// arr.push({});
// arr.push(30);
// arr.push(true);
// console.log(arr);
// let person: { fname: any; age: number; address: { city: string } } = {
// 	fname: "mona",
// 	age: 40,
// };
// person.fname = "ola";
// person.fname = 30; //
// var input =  as number;
// console.log(input!.value);
// let arr: { fname: string; age: number }[] = [
//     { fname: "mona", age: 30 }
// ];
// var add = () =>
// 	void ;
// 		// signature
// 		function add2(x: number, y: number): string {
// 			// console.log("Gello");
// 			// return;
// 			// return undefined;
// 		}
// 	);
// add(10, 30);
// function showDetails(x, y, ...w: string[]) {
// 	console.log(w);
// 	console.log(x + y);
// }
// showDetails(20, 30, "40", 50, "mona");
// function showDetails(x?: string, y: string = "") {
// 	console.log(x + y);
// }
// showDetails(_, "fk");
// let data: [string, number] = ["ahmed", 40];
// function show(fname: string): void {
// 	console.log(fname);
// }
// show(...data); // show(50,40)
// console.log("Hello");
// class Person {
// 	// fname:string
// 	//private fname: string;
// 	constructor(private fname: string, public lname: string, public age: number) {
// 		// this.fname = fname
// 	}
// 	get getFname() {
// 		return this.fname;
// 	}
// 	set setFname(value: string) {
// 		this.fname = value;
// 	}
// }
// var p1 = new Person("mona", "ali", 400);
// p1.setFname = "pet";
// console.log(p1.getFname);
// var p2 = new Person("kareem", "ahmed", 20);
// // console.log(p1.fname);
// console.log(p2);
// interface Iperson {
// 	fname: string;
// 	age: number;
// 	display: () => void;
// 	add: (x: number, y: number) => number;
// }
// class Person implements Iperson {
// 	constructor(public fname: string, public age: number) {}
// 	display(): void {
// 		console.log("Hello");
// 	}
// 	add(x: number, y: number): number {
// 		return x + y;
// 	}
// }
// class Person {
// 	constructor(public fname: string, public age: number) {}
// 	display() {
// 		console.log("any 7aga");
// 	}
// }
// class User extends Person {
// 	constructor(fname: string, age, public password: string) {
// 		super(fname, age);
// 	}
// 	display(): void {
// 		console.log("new code");
// 	}
// }
// var myUser = new User("mona", 30, "akkfk");
// console.log(myUser);
// let product: { display: boolean } = {
// 	display: true,
// };
// product = true; // error //
// product.display = "mofk"; // error
// interface Iproduct {
// 	id: number;
// 	productName: string;
// 	price: number;
// 	quantity: number;
// 	imgUrl?: string;
// }
// class Product implements Iproduct {
// 	id: number;
// 	productName: string;
// 	price: number;
// 	quantity: number;
// 	imgUrl?: string | undefined;
// }
// class Pet extends Product {}
// var arr: Iproduct[] = [
// 	{ id: 1, productName: "Book", price: 300, quantity: 30 },
// 	{ id: 2, productName: "Watch", price: 300, quantity: 30 },
// 	{ id: 3, productName: "Pen", price: 78, quantity: 30 },
// ];
// class Person {
// 	constructor(private fname: string) {}
// 	setFname(value) {}
// 	getFname() {}
// }
// var p1 = new Person("mona");
// p1.fname = "abdo"; /// set
// console.log(p1.fname); //
