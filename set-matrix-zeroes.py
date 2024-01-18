class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows, cols = len(matrix), len(matrix[0])
        rowsToRemove = set()
        colsToRemove = set()

        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 0:
                    rowsToRemove.add(i)
                    colsToRemove.add(j)

        for i in range(rows):
            for j in range(cols):
                if (i in rowsToRemove) or (j in colsToRemove):
                    matrix[i][j] = 0