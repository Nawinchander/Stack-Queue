// Problem

// Given a string containing ()[]{}, determine if the parentheses are valid.
// A string is valid if:
// Open brackets must be closed by the same type
// Closed in the correct order

// EXAMPLE: 
// Input: "()[]{}"
// Output: true

// Input: "(]"
// Output: false

///LOGIC

// Open bracket → push to stack
// Close bracket → check top of stack


function isValid(s) {
    const stack = [];
    
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}")); 
console.log(isValid("(]"));


//Time Complexity : O(n)
//Space Complexity : O(n)


