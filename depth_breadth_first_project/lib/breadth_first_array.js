function breadthFirstArray(root) {
    let visited = [];
    let stack = [root];

    while(stack.length){
        let node = stack.shift();
        visited.push(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return visited;
}

module.exports = {
    breadthFirstArray
};