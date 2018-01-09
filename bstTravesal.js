//一个二叉树的例子
var tree = {
 value: 1,
 left: {
  value: 2,
  left: {
   value: 4
  }
 },
 right: {
  value: 3,
  left: {
   value: 5,
   left: {
    value: 7
   },
   right: {
    value: 8
   }
  },
  right: {
   value: 6
  }
 }
}
//二叉树深度优先遍历的递归写法
function preOrder(node) { 
 if (node) {  
     console.log(node.value);
     preOrder(node.left);
     preOrder(node.right);
 }
}
//二叉树深度优先遍历的非递归写法
function preOrderUnRecur(node) { 
 var stack = []
 stack.push(node) 
 while(stack.length !== 0) {
     node = stack.pop()  
     console.log(node.value)  
     if(node.right) stack.push(node.right)  
     if(node.left) stack.push(node.left)
 }
}
//二叉树广度度优先遍历的非递归写法
function levelOrderTraversal(node) {  
 var que = []
 que.push(node) 
 while(que.length !== 0) {
     node = que.shift()  
     console.log(node.value)  
     if(node.left) que.push(node.left)  
     if(node.right) que.push(node.right)
 }
}