class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # change input itself instead of creating & maintaining visited array
        if not grid:
            return 0

        islands = 0
        rows, cols = len(grid), len(grid[0])
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1":
                    self.dfs(grid, i, j)
                    islands += 1
        return islands

    def dfs(self, grid, i, j):
        if i<0 or j<0 or i>=len(grid) or j>=len(grid[0]) or grid[i][j] != "1":
            return
        grid[i][j] = "V"
        self.dfs(grid, i, j+1)
        self.dfs(grid, i, j-1)
        self.dfs(grid, i+1, j)
        self.dfs(grid, i-1, j)