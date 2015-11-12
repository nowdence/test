/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date2015-09-19 18:02:01
 * @version $Id$
 */

function changeTheme1() {
	var e = document.getElementById('theme');
	console.log(e);
	e.style.background = "url(images/1.png) repeat";
	var ff = navigator.userAgent.indexOf('Chome') != -1;

	function setBody(html) {
		document.body.innerHTML += '<br>' + (html || new Date().toLocaleString());
		var hk = html ? ',abc,' : ',date,';
		if (location.hash.indexOf(hk) == -1) location.hash += hk;
	}
	if (!ff) { //由于firefox回退能保存js动态生成内容，所以不对firefox执行hash判断
		var hash = location.hash;
		if (hash.indexOf('date') != -1) //hash中包含添加时间动作，则执行下操作
			setBody();
		if (hash.indexOf('abc') != -1) //hash中包含添加abc动作，则执行下操作
			setBody('abc');
	}
}

function changeTheme2() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/2.png) repeat";
}

function changeTheme3() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/3.png) repeat";
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
}