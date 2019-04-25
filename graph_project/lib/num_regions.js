function numRegions(graph, visited = []) {
    let count = 0;
    Object.keys(graph).forEach(key => {
        if(visited.includes(key)) return;
        count++;
        visited = visited.concat(depth(key, graph, visited))
    })

    return count;
}

function depth(node, graph, visited) {
    if(visited.includes(node)) return;
    visited.push(node);
    graph[node].forEach(neighbor => {
        visited = visited.concat(depth(neighbor, graph, visited))
    })

    return visited;
}

module.exports = {
    numRegions
};