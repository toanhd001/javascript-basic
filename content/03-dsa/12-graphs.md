---
id: dsa-graphs
title: Đồ thị (Graph): BFS, DFS, sắp xếp topo
---
Đồ thị gồm **đỉnh** (node) và **cạnh** (edge) nối chúng. Mạng xã hội, bản đồ, phụ thuộc giữa các module, lưới ô vuông trong game — đều là đồ thị.

## Biểu diễn: danh sách kề (adjacency list)

```js run
// Cạnh vô hướng: [[0,1],[0,2],[1,3]]
function buildGraph(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);        // bỏ dòng này nếu đồ thị CÓ HƯỚNG
  }
  return adj;
}
console.log(buildGraph(4, [[0, 1], [0, 2], [1, 3]])); // [[1,2],[0,3],[0],[1]]
```

Danh sách kề tốn O(V + E) bộ nhớ. (Ma trận kề V×V chỉ hợp khi đồ thị dày.)

## BFS — lan theo từng lớp, tìm đường ngắn nhất

Trên đồ thị **không trọng số**, BFS từ nguồn cho ra **khoảng cách ngắn nhất** (số cạnh) tới mọi đỉnh.

```js run
function bfsDistances(adj, start) {
  const dist = new Array(adj.length).fill(-1);
  dist[start] = 0;
  const queue = [start];
  for (let head = 0; head < queue.length; head++) {
    const u = queue[head];
    for (const v of adj[u]) {
      if (dist[v] === -1) {          // chưa thăm
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
    }
  }
  return dist;
}
const adj = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]];
console.log(bfsDistances(adj, 0)); // [0, 1, 1, 2, 3]
```

> Đánh dấu "đã thăm" **khi đưa vào queue**, không phải khi lấy ra — nếu không, một đỉnh có thể bị đưa vào queue nhiều lần.

## DFS — đi sâu hết mức rồi quay lui

Dùng để: duyệt mọi đỉnh liên thông, đếm thành phần liên thông, phát hiện chu trình, sắp xếp topo.

```js run
function countComponents(n, adj) {
  const seen = new Array(n).fill(false);
  function dfs(u) {
    seen[u] = true;
    for (const v of adj[u]) if (!seen[v]) dfs(v);
  }
  let count = 0;
  for (let u = 0; u < n; u++) {
    if (!seen[u]) {
      count++;
      dfs(u);
    }
  }
  return count;
}
console.log(countComponents(5, [[1], [0], [3], [2], []])); // 3: {0,1} {2,3} {4}
```

## Lưới (grid) là đồ thị ngầm

Mỗi ô là một đỉnh, nối với 4 ô kề. Không cần xây danh sách kề — duyệt hàng xóm bằng mảng hướng:

```js
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
for (const [dr, dc] of DIRS) {
  const nr = r + dr, nc = c + dc;
  if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue; // ra ngoài lưới
  // ...
}
```

## Sắp xếp topo (topological sort) — thứ tự phụ thuộc

Với đồ thị **có hướng không chu trình** (DAG): sắp các đỉnh sao cho mọi cạnh `u → v` thì `u` đứng trước `v`. Ví dụ: thứ tự học môn (môn tiên quyết), thứ tự build module.

**Thuật toán Kahn:** lần lượt lấy các đỉnh có **bậc vào = 0** (không còn phụ thuộc), "xoá" chúng và giảm bậc vào của hàng xóm. Nếu cuối cùng không lấy được hết đỉnh → đồ thị **có chu trình**.

```js run
function topoSort(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].push(v);
    indegree[v]++;
  }
  const order = [];
  for (let u = 0; u < n; u++) if (indegree[u] === 0) order.push(u);
  for (let head = 0; head < order.length; head++) {
    for (const v of adj[order[head]]) {
      if (--indegree[v] === 0) order.push(v);
    }
  }
  return order.length === n ? order : null; // null = có chu trình
}
console.log(topoSort(4, [[0, 1], [0, 2], [1, 3], [2, 3]])); // [0, 1, 2, 3]
console.log(topoSort(2, [[0, 1], [1, 0]]));                 // null
```

## Độ phức tạp

BFS, DFS, Kahn đều **O(V + E)**: mỗi đỉnh thăm một lần, mỗi cạnh xét một (hoặc hai) lần.

## Câu hỏi tại sao

- Tại sao BFS cho đường đi ngắn nhất còn DFS thì không? Nếu cạnh có **trọng số** khác nhau thì BFS còn đúng không? (Tìm hiểu: Dijkstra = BFS + heap.)
- DFS đệ quy trên lưới 1000×1000 có thể tràn stack. Bạn sẽ đổi sang gì?
- Union-Find (Disjoint Set) cũng đếm được thành phần liên thông. Khi nào nó tốt hơn DFS? (Gợi ý: cạnh được thêm dần theo thời gian.)
