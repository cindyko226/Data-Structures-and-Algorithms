// function maxValue(node, visited=new Set()) {
//     let queue = [node];
//     let largest = null;
//     while (queue.length){
//         let first = queue.shift();
//         if(visited.has(first.val)) continue;
//         visited.add(first.val);
//         queue.push(...first.neighbors);
//         if(largest===null || first.val > largest){
//             largest = first.val
//         }
//     }
//     return largest;
// }

function maxValue(node, visited = new Set()){
    if(visited.has(node)) return -Infinity;
    visited.add(node);
    let maxNodeVal = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
    return Math.max(node.val, ...maxNodeVal);
}

module.exports = {
    maxValue
};