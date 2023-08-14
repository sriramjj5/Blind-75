let soln = [];
function combinationSum(candidates: number[], target: number): number[][] {
    for (let i = 0; i < candidates.length; i++) {
        helper([candidates[i]], candidates[i], candidates.slice(i), target);
    }
    let solnToReturn = soln;
    soln = []
    return solnToReturn;
};

function helper(curr: number[], currSum: number, candidates: number[], target: number) {
    if (currSum > target) {
        return;
    } else if (currSum === target) {
        soln.push(curr);
    } else {
        for (let i = 0; i < candidates.length; i++) { // def. a couple wasteful recursive calls here
            helper(curr.concat(candidates[i]), currSum+candidates[i], candidates.slice(i),                  target);
        }
    }
}