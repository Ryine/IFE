//读取数据
var num1 = document.getElementById("num1");
var span = document.getElementsByTagName("span");
var div = document.getElementById("num2");
var button = document.getElementsByTagName("button");

//验证输入合法性并返回span标签
function insertNum() {
    if (num1.value && !isNaN(num1.value)) {
        var newSpan = document.createElement("span");
        newSpan.innerHTML = num1.value;
        return newSpan;
    } else {
        alert("请输入正确的数字！");
    }

} 


//左侧入
function leftIn() {
    var newSpan = insertNum();
    div.insertBefore(newSpan,span[0]);
    newSpan.onclick = function () { 
        div.removeChild(newSpan);
    }

} 

//右侧入
function rightIn() {
    var newSpan = insertNum();
    div.appendChild(newSpan);
    newSpan.onclick = function () {
        div.removeChild(newSpan);
    }
}

//左侧出
function leftOut() {
    if (span[0]) {
    alert(span[0].innerText);
    div.removeChild(span[0]);
    } else {
        alert("不存在队列！")
    }
}

//右侧出
function rightOut() {
    if (span[0]) {
    alert(span[span.length - 1].innerText);
    div.removeChild(span[span.length - 1]);
    } else {
        alert("不存在队列！")
    }
 
}

//绑定事件
button[0].onclick = leftIn;
button[1].onclick = rightIn;
button[2].onclick = leftOut;
button[3].onclick = rightOut; 
