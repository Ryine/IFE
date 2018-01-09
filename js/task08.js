var div = [],
    timer = null;

//深度优先遍历
function deepTraversal(node) {
    if(node != null) {
        div.push(node);
        var children = node.children;
        for(var i = children.length - 1; i >=0;  i--)
            deepTraversal(children[i]);
    }
}
//广度优先遍历
function wideTraversal(node) {
    if(node != null) {
        var queue = [];
        queue.push(node);
        while(queue.length != 0) {
            var item = queue.shift();
            div.push(item);
            var children = item.children;
            for(var i = 0; i < children.length; i++)
                queue.push(children[i]);
        }
    }
}
//获取输入
function getInput() {
    search = document.getElementById("search").value;
}

//改变颜色
function changeColor() {
    var i = 0;
    timer = setInterval(function() { 
        if(i > 0) {
            var value = div[i-1].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g,"");
            var color = value === search ? "#f00" : "#fff"
            div[i-1].style.backgroundColor = color;

        }
        else if(i == div.length) {
            clearInterval(timer);
            return null;
        }
        div[i].style.backgroundColor = "#00f";
        i++;

    },500);
}
//重置
function reset() {
    div = [];
    search = null;
    clearInterval(timer);
    var divList = document.getElementsByTagName("div");
    for(var i = 0; i < divList.length; i++)
        divList[i].style.backgroundColor = "#fff";
}
//绑定点击事件
function init() {
    var btn = document.getElementsByTagName("button");
    var root = document.getElementById("root");
    btn[0].onclick = function() {
        reset();
        deepTraversal(root);
        changeColor();
    }
    btn[1].onclick = function() {
        reset();
        wideTraversal(root);
        changeColor();
    }
    btn[2].onclick = function() {
        reset();
        deepTraversal(root);
        getInput();
        changeColor();
    }
    btn[3].onclick = function() {
        reset();
        wideTraversal(root);
        getInput();
        changeColor();
    }
}
init();