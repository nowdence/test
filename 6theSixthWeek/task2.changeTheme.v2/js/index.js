/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date2015-09-19 18:02:01
 * @version $Id$
 */

function changeTheme() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/0.png) repeat";

	localStorage.a = '5';
}

function changeTheme1() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/1.png) repeat";

	localStorage.a = '1';
}

function changeTheme2() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/2.png) repeat";
	localStorage.a = '2';
}

function changeTheme3() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/3.png) repeat";
	localStorage.a = '3';
}

function changeTheme4() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.setAttribute('style', 'background-attachment: fixed;' + 'background-clip: border-box;' + 'background-color: rgb(8, 43, 79);' + 'background-image:url(images/4.png);' + 'background-origin: padding-box;' + 'background-size: contain;')
	var q = document.getElementById('qlogin');
	// console.log(a);
	q.setAttribute("style", "color:#fff;");
	var l = document.getElementById('login');
	// console.log(a);
	l.setAttribute("style", "color:#fff;");
	var r = document.getElementById('register');
	// console.log(a);
	r.setAttribute("style", "color:#fff;");
	localStorage.a = '4';
}

var b = localStorage.getItem('a');
if (b == 1) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/1.png) repeat";
}
if (b == 2) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/2.png) repeat";
}
if (b == 3) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/3.png) repeat";
}
if (b == 4) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.setAttribute('style', 'background-attachment: fixed;' + 'background-clip: border-box;' + 'background-color: rgb(8, 43, 79);' + 'background-image:url(images/4.png);' + 'background-origin: padding-box;' + 'background-size: contain;')
	var q = document.getElementById('qlogin');
	// console.log(a);
	q.setAttribute("style", "color:#fff;");
	var l = document.getElementById('login');
	// console.log(a);
	l.setAttribute("style", "color:#fff;");
	var r = document.getElementById('register');
	// console.log(a);
	r.setAttribute("style", "color:#fff;");
}
else{
	localStorage.clear();
}