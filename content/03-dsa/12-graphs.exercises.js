module.exports = [
  {
    id: 'number-of-islands',
    title: 'Đếm số đảo',
    difficulty: 'medium',
    fn: 'numIslands',
    prompt: `
Lưới \`grid\` gồm \`"1"\` (đất) và \`"0"\` (nước). Một **đảo** là nhóm ô đất nối nhau theo 4 hướng (trên/dưới/trái/phải). Đếm số đảo. (LeetCode 200)

Test ẩn có lưới 300×300 toàn đất xoắn ốc — DFS đệ quy có thể tràn stack, cân nhắc BFS hoặc stack tự quản lý.
`,
    starter: `
function numIslands(grid) {

}
`,
    solution: `
function numIslands(grid) {
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] !== "1" || seen[r][c]) continue;
      count++;
      seen[r][c] = true;
      const stack = [[r, c]];
      while (stack.length) {
        const [cr, cc] = stack.pop();
        for (const [dr, dc] of DIRS) {
          const nr = cr + dr;
          const nc = cc + dc;
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
          if (grid[nr][nc] !== "1" || seen[nr][nc]) continue;
          seen[nr][nc] = true;
          stack.push([nr, nc]);
        }
      }
    }
  }
  return count;
}
`,
    hints: [
      'Duyệt mọi ô. Gặp ô đất chưa thăm → tăng bộ đếm, rồi "loang" (DFS/BFS) đánh dấu toàn bộ đảo đó là đã thăm.',
      'Dùng stack tự quản lý thay cho đệ quy để tránh tràn stack với đảo lớn.',
      'Có thể đánh dấu bằng cách sửa `grid[r][c] = "0"` — nhanh nhưng làm hỏng input; hỏi người phỏng vấn trước.'
    ],
    tests: [
      { args: [[['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]], expected: 1 },
      { args: [[['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]], expected: 3 },
      { args: [[['0']]], expected: 0 },
      { args: [[['1', '0', '1', '0', '1']]], expected: 3 },
      { gen: 'const n = 300; const g = Array.from({ length: n }, () => new Array(n).fill("1")); return [g];', label: 'lưới 300×300 toàn đất (một đảo khổng lồ)', expected: 1 }
    ]
  },
  {
    id: 'shortest-path-grid',
    title: 'Đường ngắn nhất trong mê cung',
    difficulty: 'medium',
    fn: 'shortestPath',
    prompt: `
Mê cung là mảng chuỗi: \`"."\` là đường đi, \`"#"\` là tường, \`"S"\` là điểm xuất phát, \`"E"\` là đích. Mỗi bước đi sang ô kề theo 4 hướng. Trả về **số bước ít nhất** từ S tới E, hoặc \`-1\` nếu không tới được.

\`\`\`
S.#
.##
..E   → 4
\`\`\`
`,
    starter: `
function shortestPath(maze) {

}
`,
    solution: `
function shortestPath(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  let start = null;
  for (let r = 0; r < rows; r++) {
    const c = maze[r].indexOf("S");
    if (c !== -1) start = [r, c];
  }
  const dist = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  dist[start[0]][start[1]] = 0;
  const queue = [start];
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let head = 0; head < queue.length; head++) {
    const [r, c] = queue[head];
    if (maze[r][c] === "E") return dist[r][c];
    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
      if (maze[nr][nc] === "#" || dist[nr][nc] !== -1) continue;
      dist[nr][nc] = dist[r][c] + 1;
      queue.push([nr, nc]);
    }
  }
  return -1;
}
`,
    hints: [
      'Đường ngắn nhất trên lưới không trọng số → **BFS**, không phải DFS.',
      'Lưu `dist[r][c]` (khởi tạo -1 = chưa thăm). Khi lấy ra ô "E" thì trả về khoảng cách của nó.',
      'Dùng con trỏ `head` thay cho `shift()`.'
    ],
    tests: [
      { args: [['S.#', '.##', '..E']], expected: 4 },
      { args: [['S#E']], expected: -1 },
      { args: [['SE']], expected: 1 },
      { args: [['S....', '####.', 'E....']], expected: 10 },
      { gen: 'const n = 400; const rows = []; for (let r = 0; r < n; r++) rows.push(".".repeat(n)); rows[0] = "S" + rows[0].slice(1); rows[n - 1] = rows[n - 1].slice(0, n - 1) + "E"; return [rows];', label: 'lưới trống 400×400, S ở góc trên trái, E ở góc dưới phải', expected: 798 }
    ]
  },
  {
    id: 'course-schedule',
    title: 'Course Schedule (phát hiện chu trình)',
    difficulty: 'medium',
    fn: 'canFinish',
    prompt: `
Có \`n\` môn học đánh số \`0..n-1\`. \`prerequisites[i] = [a, b]\` nghĩa là phải học \`b\` **trước** \`a\`. Có thể học hết các môn không? (LeetCode 207)
`,
    starter: `
function canFinish(n, prerequisites) {

}
`,
    solution: `
function canFinish(n, prerequisites) {
  const adj = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indegree[a]++;
  }
  const queue = [];
  for (let i = 0; i < n; i++) if (indegree[i] === 0) queue.push(i);
  for (let head = 0; head < queue.length; head++) {
    for (const next of adj[queue[head]]) {
      if (--indegree[next] === 0) queue.push(next);
    }
  }
  return queue.length === n;
}
`,
    hints: [
      'Đây là câu hỏi "đồ thị có hướng này có **chu trình** không?". Cạnh `b → a`.',
      'Sắp xếp topo (Kahn): nếu lấy ra được đủ n đỉnh thì không có chu trình.'
    ],
    tests: [
      { args: [2, [[1, 0]]], expected: true },
      { args: [2, [[1, 0], [0, 1]]], expected: false },
      { args: [3, []], expected: true },
      { args: [4, [[1, 0], [2, 1], [3, 2], [1, 3]]], expected: false },
      { args: [5, [[1, 0], [2, 0], [3, 1], [3, 2], [4, 3]]], expected: true },
      { gen: 'const n = 100000; const e = []; for (let i = 1; i < n; i++) e.push([i, i - 1]); return [n, e];', label: 'chuỗi 100.000 môn nối tiếp', expected: true }
    ]
  },
  {
    id: 'count-components',
    title: 'Đếm thành phần liên thông',
    difficulty: 'medium',
    fn: 'countComponents',
    prompt: `
Đồ thị **vô hướng** \`n\` đỉnh với danh sách cạnh \`edges\`. Đếm số thành phần liên thông.

Thử giải bằng **Union-Find** (Disjoint Set Union): mỗi đỉnh có "đại diện"; nối cạnh = hợp hai nhóm.
`,
    starter: `
function countComponents(n, edges) {

}
`,
    solution: `
function countComponents(n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);
  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }
  let components = n;
  for (const [a, b] of edges) {
    let ra = find(a);
    let rb = find(b);
    if (ra === rb) continue;
    if (rank[ra] < rank[rb]) [ra, rb] = [rb, ra];
    parent[rb] = ra;
    if (rank[ra] === rank[rb]) rank[ra]++;
    components--;
  }
  return components;
}
`,
    hints: [
      '`parent[i] = i` ban đầu: mỗi đỉnh là một nhóm. `find(x)` đi theo `parent` tới gốc.',
      'Với mỗi cạnh (a, b): nếu `find(a) !== find(b)` thì nối gốc này vào gốc kia và giảm số thành phần.',
      'Tối ưu: nén đường đi (path compression) trong `find`, và nối cây thấp vào cây cao (union by rank).'
    ],
    explain: 'Với hai tối ưu, mỗi thao tác gần như O(1) (chính xác là O(α(n)) — hàm Ackermann ngược, ≤ 4 với mọi n thực tế). Union-Find mạnh khi cạnh được thêm **dần dần** và cần trả lời "a và b đã nối chưa?" liên tục (VD Kruskal, bài "Redundant Connection").',
    tests: [
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 1 },
      { args: [3, []], expected: 3 },
      { args: [4, [[0, 1], [1, 0], [2, 3], [3, 2]]], expected: 2 },
      { gen: 'const n = 200000; const e = []; for (let i = 0; i + 2 < n; i += 2) e.push([i, i + 2]); return [n, e];', label: 'n = 200.000 (chẵn nối chẵn, lẻ đứng riêng)', expected: 100001 }
    ]
  }
];
