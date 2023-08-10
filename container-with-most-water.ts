function maxArea(height: number[]): number {
    // two pointer

    let l: number = 0;
    let r: number = height.length - 1;

    let maxAreaSoFar: number = 0;

    while (l < r) {    // ?
        let leftHeight = height[l];
        let rightHeight = height[r];
        let currArea = (r-l)*(Math.min(leftHeight, rightHeight));          
        if (currArea > maxAreaSoFar) {
            maxAreaSoFar = currArea;
        }
        if (leftHeight < rightHeight) {
            l = l + 1;
        } else {
            r = r - 1;
        }
    } 

    return maxAreaSoFar;
};