// let V = 9;
//
// // let graph = new Array();
// // graph[0] = new Array(0, 4, 0, 0, 0, 0, 0, 8, 0);
//
// // { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
// // 	{ 4, 0, 8, 0, 0, 0, 0, 11, 0 },
// // 	{ 0, 8, 0, 7, 0, 4, 0, 0, 2 },
// // 	{ 0, 0, 7, 0, 9, 14, 0, 0, 0 },
// // 	{ 0, 0, 0, 9, 0, 10, 0, 0, 0 },
// // 	{ 0, 0, 4, 14, 10, 0, 2, 0, 0 },
// // 	{ 0, 0, 0, 0, 0, 2, 0, 1, 6 },
// // 	{ 8, 11, 0, 0, 0, 0, 1, 0, 7 },
// // 	{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
//
// // dijkstras(graph, 0);
//
// function testGraph() {
// 	alert("yo motha!");
//
// 	let graph = new Array();
// 	graph[0] = new Array(0, 4, 0, 0, 0, 0, 0, 8, 0);
// }
//
// function shortestPath(let graph, let source) {
// 	let distance = new Array(V);
// 	let visited = new Array(V);
//
// 	distance.fill(1000000000);
// 	visited.fill(1000000000);
//
// 	distance[source] = 0;
//
// 	for(int count = 0; count < V; count++) {
// 		let u = minDistance(distance, visited);
//
// 		visited[u] = true;
//
// 		for(int v = 0; v < V; v++) {
// 			if(!visited[v] && graph[v][u] != 0 &&
// 			distance[u] != 1000000000 &&
// 			distance[u] + graph[u][v] < distance[v]) {
// 				distance[v] = distance[u] + graph[u][v];
// 			}
// 		}
// 	}
// 	console.log(distance); //send output here.
// }
//
// function minDistance(let distance, let visited) {
// 	let minValue = 1000000000;
// 	let minIndex = -1;
//
// 	for(let v = 0; v < V; v++) {
// 		if(!visited && distance[v] <= minValue) {
// 			minValue = distance[v];
// 			minIndex = v;
// 		}
// 	}
// 	return minIndex;
// }