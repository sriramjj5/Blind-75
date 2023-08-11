function isValid(s: string): boolean {
    let stack: Array<String> = [];          // has opening brackets only
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false; // no opening brackets to close?
            }
            let tempOpeningBracket = stack.pop();
            if ((tempOpeningBracket === "(" && s[i] !== ")") || 
                (tempOpeningBracket === "{" && s[i] !== "}") ||
                (tempOpeningBracket === "[" && s[i] !== "]")) {
                    return false; // doesn't close corresponding bracket?
                }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false; // too many opening brackets?
    }
};