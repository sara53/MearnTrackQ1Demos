/** Agenda
 * ----------
 *  == How JS Works (History) ?
 *  == where is js code written?
 *  == Varaibles
 *  == Coercion
 *  == Datatypes
 *  == Operators In JS
 *  == control Flow, looping
 *  == Communication with user
 * -----------------------------------
 *  == Regx ==> [Self Study]
 */

/*===========Datatypes 
---------------------------
== Primitive Datatype
    == string
    == number
    == boolean
    = undefined
    == null
== Refence DataType
=========*/
// var firstName = "mona"; // string

// var num = 10.25;

// var flag = true;

// var test;

// test = "ali";

// var product = null;
// console.log(typeof product);

// product = { name: "fdg" };

/**===========
 * Coercion ==> js Engine convert automaticlly from datatype to anther datatype
 *  (+) ==> number + number --> add
 *  (+) ==> string + string --> concat
 *
 * ============ */

// var num1 = 10; // number --> "10"

// var num2 = "10"; // string

// console.log(num1 * num2);

// var fname = "mona";

// var fname = String("10");

// console.log(fname);

// var num = 10;

// var num = Number("mona");
// console.log(typeof num);
/**
 * false
 * 0
 * undefined
 * null
 * NaN
 * ""
 *
 */
// var flag = true;
// var flag = Boolean("ffk");

// console.log(flag);
/**Logica Operator
 * ----------Logical Operators----------
 * && , || , !
 * --------------------
 * == &&
 *  true && true --> true
 *  false && true --> false
 *  true && false --> false
 *  false && false --> false
 * --------------------------
 * ||
 * true || true ==> true
 * true || false ==> true
 * false || true ==> true
 * fale || false ==> false
 */
/**============Comparasion Operators
 *  > , >=,== ,===
 *
 *  (==) --> (values Only)
 *  (===) -->(Values && Datatype)
 * ============ */
// var a = 2;
// var b = true;
// console.log(a == b);
// var color = "red";

// switch (color) {
// 	case "red":
// 		console.log("Color is Red");
// 		break;

// 	case "green":
// 		console.log("color is Green");

// 		break;
// 	default:
// 		console.log("dfgh");
// }
// if (color == "red") {
// 	console.log("Color is : Red");
// } else if (color == "green") {
// 	console.log("color : green");
// } else {
// 	console.log("Default");
// }
// if (color == "red") {
// 	console.log("My Fav Color is Red");
// } else {
// 	console.log("You don't have any Fav Color");
// }
// false ? console.log("Color is : Red") : console.log(color);

// for (var i = 0; i < 5; i++) {
// 	console.log(i + " mona");
// }

// var i = 0;

// while (i < 5) {
// 	console.log(i + " mona");
// 	i++;
// }
// do {
//     //
// }while()

// var flag = true;

// if (flag) {
// } else {
// }
// var i = 4;
// document.writeln("Hello Mearn Track");
// document.writeln(" Mearn Track");
// document.writeln("<h" + i + ">Hello Mearn</h" + i + ">");
/**============  ====== */
// var fname = prompt("Enter You Number");
// document.writeln(fname + 10);
// var flag = confirm("Are You sure you want to delete this item");

// flag ? document.writeln("Item Deleted") : document.writeln("Operation Canceld");
alert("Item deleted");
