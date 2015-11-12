var num = "0",
	result = 0,
	numshow = "0";
var operate = 0; //判断输入状态的标志 
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 

//输入数据
function command(num) {
	var str = String(document.getElementById('area_show').value); //获得当前显示数据 
	str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，
	//否则返回空值; 
	str = str + String(num); //给当前值追加字符 
	// console.log(str);
	document.getElementById('area_show').value = str; //刷新显示 
	operate = 0; //重置输入状态 
	quit = 0; //重置防止重复按键的标志 
}
//输入常量
function command1(num) {
	var str = String(document.getElementById('area_show').value); //获得当前显示数据 
	str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，
	//否则返回空值; 
	if (num == "E") {
		num = Math.E;
	}
	if (num == "PI") {
		num = Math.PI;
	}
	if (num == "LN2") {
		num = Math.LN2;
	}
	if (num == "LN10") {
		num = Math.LN10;
	}
	if (num == "LOG2E") {
		num = Math.LOG2E;
	}
	if (num == "SQRT1_2") {
		num = Math.SQRT1_2;
	}
	if (num == "SQRT2") {
		num = Math.SQRT2;
	}
	str = str + String(num); //给当前值追加字符 
	// console.log(str);
	document.getElementById('area_show').value = str; //刷新显示 
	operate = 1; //重置输入状态 
	quit = 0; //重置防止重复按键的标志 
}

// +-号转换
function switch_mp() {
	var str = String(document.getElementById('area_show').value);
	str = (-str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 正弦函数
function sin() {
	var str = String(document.getElementById('area_show').value);
	str = Math.sin(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 余弦函数
function cos() {
	var str = String(document.getElementById('area_show').value);
	str = Math.cos(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 正切函数
function tan() {
	var str = String(document.getElementById('area_show').value);
	str = Math.tan(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 以e底的对数函数
function ln() {
	var str = String(document.getElementById('area_show').value);
	str = Math.log(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 以10为底的对数函数
function lg() {
	var str = String(document.getElementById('area_show').value);
	str = Math.log(str) / Math.LN10;
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 随机数
function random() {
	var str = String(document.getElementById('area_show').value);
	str = Math.random();
	document.getElementById('area_show').value = str;
	operate = 1;
}


// 平方根函数
function sqrt() {
	var str = String(document.getElementById('area_show').value);
	str = Math.sqrt(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 反正弦函数
function arcsin() {
	var str = String(document.getElementById('area_show').value);
	str = Math.asin(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 反余弦函数
function arccos() {
	var str = String(document.getElementById('area_show').value);
	str = Math.acos(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
// 反正切函数
function arctan() {
	var str = String(document.getElementById('area_show').value);
	str = Math.atan(str);
	document.getElementById('area_show').value = str;
	operate = 1;
}
//倒数
function daoshu() {
	var str = String(document.getElementById('area_show').value);
	str = 1 / str;
	document.getElementById('area_show').value = str;
	operate = 1;
}
//阶乘
function factorial() {
	var str = String(document.getElementById('area_show').value);
	var temp = str;
	while (str >= 2) {
		temp = temp * (str - 1);
		str--;
	}
	document.getElementById('area_show').value = temp;
	operate = 1;

}
// 小数点的处理
function dot() {
	var str = String(document.getElementById('area_show').value);
	str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
	for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
		if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
	}
	str = str + ".";
	document.getElementById('area_show').value = str;
	operate = 0;
}
//退格
function del() {
	var str = String(document.getElementById('area_show').value);
	str = (str != "0") ? str : "";
	str = str.substr(0, str.length - 1);
	str = (str != "") ? str : "0";
	document.getElementById('area_show').value = str;
}
//清除数据
function clearscreen() {
	num = 0;
	result = 0;
	numshow = "0";
	document.getElementById('area_show').value = "0";
}
//加法
function plus() {
	calculate();
	operate = 1;
	calcul = 1;
}
//减法
function minus() {
	calculate();
	operate = 1;
	calcul = 2;
}
//乘法
function times() {
	calculate();
	operate = 1;
	calcul = 3;
}
//除法
function divide() {
	calculate();
	operate = 1;
	calcul = 4;
}
//求余
function persent() {
	calculate();
	operate = 1;
	calcul = 5;
}
//等于
function equal() {
	calculate();
	operate = 1;
	num = 0;
	result = 0;
	numshow = "0";
}
//计算幂函数
function pow() {
	calculate();
	operate = 1;
	calcul = 6;
}
// 计算
function calculate() {
	numshow = Number(document.getElementById('area_show').value);
	if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
		switch (calcul) { //判断要输入状态 
			case 1:
				result = num + numshow;
				break; //计算"+" 
			case 2:
				result = num - numshow;
				break; //计算"-" 
			case 3:
				result = num * numshow;
				break;
			case 4:
				if (numshow != 0) {
					result = num / numshow;
				} else {
					document.getElementById("note").innerHTML = "除数不能为零！";
					setTimeout(clearnote, 4000);
					result = num / numshow;
				}
				break;
			case 5:
				result = num % numshow;
				break;
			case 6:
				result = Math.pow(num, numshow);
				break;
		}
		quit = 1; //避免重复按键 
	} else {
		result = numshow;
	}
	numshow = String(result);
	document.getElementById('area_show').value = numshow;
	num = result; //存储当前值 
}

function clearnote() { //清空提示 
	document.getElementById("note").innerHTML = "";
}