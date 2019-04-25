// function numRegions(graph, visited = []) {
//     let count = 0;
//     Object.keys(graph).forEach(key => {
//         if(visited.includes(key)) return;
//         count++;
//         visited = visited.concat(depth(key, graph, visited))
//     })

//     return count;
// }

function numRegions(graph, visited= new Set()){
    let count = 0;
    for(let node in graph){
        if(depth(node, graph, visited)) count++;
    }
    return count;
}


function depth(node, graph, visited) {
    if(visited.has(node)) return false;
    visited.add(node);
    graph[node].forEach(neighbor => {
        depth(neighbor, graph, visited);
    });

    return true;
}

module.exports = {
    numRegions
};