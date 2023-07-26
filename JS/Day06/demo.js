/**=========== AJAX =========== */
// var tbody = document.getElementById("tbody");
// function execute() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var usersData = JSON.parse(xhr.response);
// 				var tr = document.createElement("tr");
// 				tr.innerHTML = `<td>${usersData.id}</td><td>${usersData.name}</td><td>${usersData.email}</td><td>${usersData.username}</td>`;
// 				tbody.append(tr);
// 			}
// 		}
// 	};
// }
/**========================= */

// document.cookie = "email=ali@gmail.com";

// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() + 3);

// var lastDate = new Date();
// lastDate.setDate(lastDate.getDate() - 1);
// console.log(expireDate);
// document.cookie = "email=mona@gmail.com;expires=" + expireDate;
// document.cookie = "password=123;expires=" + expireDate;
// document.cookie = "email=test@gamil.com;expires=" + expireDate;
// document.cookie = "password=123;expires=" + expireDate;

// console.log(document.cookie);

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }

// function getAllCookies() {
// 	return document.cookie;
// }

// function deleteCookie(key) {}

// function getCookie() {}
/*** Error Handling */

// try {
// 	console.log("First");
// 	console.log("Second");
// 	console.loggg("third");
// } catch (error) {
// 	console.log(error);
// 	// throw "My Error";
// 	document.writeln("Connectin Faild ,, try Again");
// } finally {
// 	console.log("finaaly");
// }

// console.log("Test");

// function show() {
// 	console.log(arguments);
// 	console.log("Test");
// }

// show("mona", "Ali");
