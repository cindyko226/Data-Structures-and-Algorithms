function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    let queue = [startingNode];
    
    while(queue.length) {
        let first = queue.shift();
        if(visited.has(first.val)) continue;
        visited.add(first.val);
        if (first.val === targetVal) return first;
        queue.push(...first.neighbors);
    }
   return null;

}

module.exports = {
    breadthFirstSearch
};