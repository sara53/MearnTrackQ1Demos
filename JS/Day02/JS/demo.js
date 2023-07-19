/** Agenda
 * ----------
 * Functions 
 *  -- Built in Functions
 *  -- User defined Functions
 *      - Function Statement 
 *      - function expression
 *  [callback function-- anynomous function]
------------------------------------------------
 === Hoisting 
 == How js Works ?
 == js execution in memory
 ----------------------------------------------
 == String Object 
 == Array
  == Math
  ----------------------------------------
  == Date Object (self Study)

 */
// paramters
// function statement
// add(2, 4);
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("Hello");
// }
// add();
// // arguments
// add(2, 4);

// console.log(result);

// Number("10");

/** ParseInt VS Number */
// add(2, 3);
// var add = function add(x, y) {
// 	return x + y;
// };

// var result = add(2, 4);
// console.log(result);

// console.log(test);
// var test = "mona";
// console.log(test);

// function mearnTrack() {
// 	console.log("Welcome Mearn Track");
// }
// var dotNetTrack = function (supName) {
// 	console.log("Track supervisor : ", supName);

// 	console.log("welcome dotnet track");
// };
// var osTrack = function (supName) {
// 	console.log("Track supervisor : ", supName);
// 	console.log("welcome OS track");
// };

// var fname = "mona";
// function greet(myFun1, myFun2) {
// 	console.log("Welcome from ITI");
// 	myFun1(function () {
// 		console.log("X function");
// 	});
// 	// myFun2();
// }

// greet(
// 	function (x) {
// 		x();
// 		console.log("First");
// 	},
// 	function () {
// 		console.log("Second");
// 	}
// );
// greet(function (supName) {
// 	console.log("Track supervisor : ", supName);
// 	console.log("welcome OS track");
// }, "mona ali");

// greet(dotNetTrack, "ahmed mohamed");
// // greet(function () {
// // 	console.log("Welcome Mearn Track");
// // });

// console.log("============");
// greet(function () {
// 	console.log("Welcome OS Track");
// });
/**========================== */

// var arr = [
// 	"mona",
// 	function () {
// 		console.log("Hello");
// 	},
// ];

// console.log(arr[1]());
/**
 * length
 * ---------------
 * == push
 * == unshift
 * == pop
 * == reverse
 * == join
 *
 */
// arr.reverse();
// arr.sort();
// var result = arr.join("");
// console.log(result);
// arr.shift();
// arr.shift();
// arr.shift();
// arr.unshift("ali");
// arr.unshift(11);
// arr.unshift([1, 2, 4]);

// console.log(arr);
// console.log(arr.length);
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

/**=================
 * Str
 * ----------------
 * = length
 * ----------------
 * == toLowercase
 * == toUpperCase
 * == charAt
 * == indexOf
   == lastIndexOF
   == startsWith
   == endsWith
   == includes
   == concat
   == trim
   == trimEnd
   == trimStart
   == split
 -------------------------
 */

// var fname = "alaa";
// var result = fname.split("").reverse().join("");
// console.log(result);
// var str = "username=mona;password=123";
// // var emoji = " :)";
// var result = str.split(";")[0].split("=");
// console.log(result);
// for (var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
/**====================== */

/**
 * PI
 *--------------
  sqrt ==>
  power ==>
  sign ==> 
        positive ==> 1
        negative ==> -1
        0 ==> 0

 == min
 == max

 -------------
    round
    random
    ceil
    foor
    -----------------


 */
// console.log(Math.sin((90 * Math.PI) / 180));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.max());
// console.log(Math.ceil(5.1));
