let sol;

function wordBreak(s: string, wordDict: string[]): boolean {
    // catsandog, [cat, cats, and, sand, dog] -> false
    // catsandog, [cat, cats, and, sand, og] -> true
    let wordsFromEachIndex = [];
    let dp = [];
    // each index of dp should be populated with the dictionary words that could start from that index
    // change wordDict to hash for more efficient lookup
    // get max length of a word from wordDict as well
    // time taken to prep wordsFromEachIndex: O(nm) where m is max length of word from dict
    let maxWordLength: number = 0;
    let wordDictAsHash: Map<string, string> = new Map<string, string>();
    for (let word of wordDict) {
        wordDictAsHash.set(word, word);
        if (word.length > maxWordLength) {
            maxWordLength = word.length;
        }
    }

    dp[0] = false;
    for (let i = 0; i < s.length; i++) {
        dp[i+1] = false;
        wordsFromEachIndex[i] = [];
        for (let j = i; j < Math.min(maxWordLength + i, s.length); j++) {
            if (wordDictAsHash.has(s.substring(i, j+1))) {
                wordsFromEachIndex[i].push(s.substring(i,j+1));
            }
        }
    }

    helper(0, dp, wordsFromEachIndex, s);
    let toReturn = sol;
    sol = false;
    return toReturn;
    

    // then take first element of dp, jump to the indexes corresponding to its length
    // memoize if it's possible to go to the end from given index: new dp array of booleans
    // dp: initialize all values of it to false
    // if reachable, set the reachable index to true and continue using new index
    // if the reached index is already true, just don't recurse!
    // if the reached index is length of string, return true
};

function helper(currIndex, dp, wordsFromEachIndex, s) {
    for (let i = currIndex; i < currIndex + wordsFromEachIndex[currIndex].length; i++) {
        for (let word of wordsFromEachIndex[i]) { 
            if (i + word.length > s.length || dp[currIndex+word.length] === true) {     
                continue;
            }
            if (i + word.length === s.length) {   
                sol = true;
                return;
            }
            if (dp[currIndex + word.length] === false) {  
                dp[currIndex + word.length] = true;       
                helper(i + word.length, dp, wordsFromEachIndex, s); 
            }
        }
    }
}
