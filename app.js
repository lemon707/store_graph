/* There are three ways to store or represent this "unweighted", "directed" graph!

Each number represents a "vertex".

Vertex 0 has in-degree of 0, and out-degree of 1.
Vertex 2 has in-degree of 1, and out-degree of 2.
Vertex 3 has in-degree of 2, and out-degree of 1.
...

(You'd have to imagine that the lines or "edges" that connect the vertices, are arrows all pointing downwards.)

        0
        |
  1     2
    \  / \
      3   4
       \ /
        5

*/

var edgeList = [ [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5] ];

var adjMatrix = [
[0,0,1,0,0,0],
[0,0,0,1,0,0],
[0,0,0,1,1,0],
[0,0,0,0,0,1],
[0,0,0,0,0,1],
[0,0,0,0,0,0]
    ];

var adjList = [
    [2],
    [3],
    [3,4],
    [5],
    [5],
    []
    ];
