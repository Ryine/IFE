//读取数据
var num1 = document.getElementById("num1");
var span = document.getElementsByTagName("span");
var div = document.getElementById("num2");
var button = document.getElementsByTagName("button");

//验证输入合法性并返回内容
function insertNum() {
     var re1 = /[^\s,，、a-zA-Z0-9\u4e00-\u9fa5]/;
     var re2 = /^[\s,，、]*$/;
     if (!re1.test(num1.value) && !re2.test(num1.value)) {
      text = num1.value.replace(/[\s、,，]+/g," ").replace(/(^\s*)|(\s*$)/g,"").split(" ");
     } else {
        alert("请输入正确的中英文及数字！");
     }

}


//左侧入
function leftIn() {
    insertNum();
     for (var i = 0; i < text.length; i++) {
        var newSpan = document.createElement("span");
        newSpan.innerHTML = text[i];
        div.insertBefore(newSpan,span[i]);
        newSpan.onclick = function () { 
        div.removeChild(newSpan);
    }
    }
} 

//右侧入
function rightIn() {
    insertNum();
     for (var i = 0; i < text.length; i++) {
        var newSpan = document.createElement("span");
        newSpan.innerHTML = text[i];
        div.appendChild(newSpan);
        newSpan.onclick = function () {
        div.removeChild(newSpan);
    }
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

