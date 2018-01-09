//深度优先遍历的递归写法
function deepTraversal(node) {  
    var nodes = [];  
    if (node != null) {    
            nodes.push(node);    
            var children = node.children;    
            for (var i = 0; i < children.length; i++)    
                deepTraversal(children[i]);    
        }    
    return nodes;  
}  
//深度优先遍历的非递归写法
function deepTraversal(node) {  
    var nodes = [];  
    if (node != null) {  
        var stack = [];  
        stack.push(node);  
        while (stack.length != 0) {  
            var item = stack.pop();  
            nodes.push(item);  
            var children = item.children;  
            for (var i = children.length - 1; i >= 0; i--)  
                stack.push(children[i]);  
        }  
    }    
    return nodes;  
}  
//广度优先遍历的递归写法：
function wideTraversal(node) {  
    var nodes = [];  
    var i = 0;  
    if (!(node == null)) {  
        nodes.push(node);  
        wideTraversal(node.nextElementSibling);  
        node = nodes[i++];  
        wideTraversal(node.firstElementChild);  
    }  
    return nodes;  
}  
//广度优先遍历的非递归写法
function wideTraversal(selectNode) {  
    var nodes = [];  
    if (selectNode != null) {  
        var queue = [];  
        queue.push(selectNode);  
        while (queue.length != 0) {  
            var item = queue.shift();  
            nodes.push(item);  
            var children = item.children;  
            for (var i = 0; i < children.length; i++)  
                queue.push(children[i]);  
        }  
    }  
    return nodes;  
}  
