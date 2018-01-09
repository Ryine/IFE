var div = [],
    timer = null;
    
    

//先序遍历
function preOrder(node) {
    if(node != null) {
    div.push(node);
    preOrder(node.firstElementChild);
    preOrder(node.lastElementChild);
    }
}
//后序遍历
function postOrder(node) {
    if(node != null) {
    postOrder(node.firstElementChild);
    postOrder(node.lastElementChild);
    div.push(node);
    }
}
//中序遍历
function inOrder(node) {
    if(node !=null) {
    inOrder(node.firstElementChild);
    div.push(node);
    inOrder(node.lastElementChild);
    }
}
//改变颜色
function changeColor() {
    var i = 0;
    div[i].style.backgroundColor = "#00f";
    timer = setInterval(function() {
        i++;
        if(i < div.length) {
        div[i-1].style.backgroundColor = "#fff";
        div[i].style.backgroundColor = "#00f";
        }
        else {
            clearInterval(timer);
            div[div.length-1].style.backgroundColor = "#fff";
        }
    },500);
}
//清空遍历
function reset() {
    div = [];
    clearInterval(timer);
    var divList = document.getElementsByTagName("div");
    for(var i = 0; i < divList.length; i++)
        divList[i].style.backgroundColor = "#fff";
    
}
//点击事件
function go() {
    var btn = document.getElementsByTagName("button");
    var root = document.getElementsByClassName("root")[0];
    btn[0].onclick = function() {
        reset();
        preOrder(root);
        changeColor();
    }
    btn[1].onclick = function() {
        reset();
        postOrder(root);
        changeColor();
    }
    btn[2].onclick = function() {
        reset();
        inOrder(root);
        changeColor();
    }
}
go();
