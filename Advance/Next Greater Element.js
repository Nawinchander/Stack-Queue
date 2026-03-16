// Problem

// For each element in an array, find the next greater element to the right.

// example
// Input:
// [2,1,2,4,3]

// Output:
// [4,2,4,-1,-1]

// explanation

// 2 → next greater is 4
// 1 → next greater is 2
// 2 → next greater is 4
// 4 → none → -1
// 3 → none → -1



function nextGreaterElement(nums) {

    const stack = [];
    const result = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {

        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = nums[i];
        }

        stack.push(i);
    }

    return result;
}

console.log(nextGreaterElement([2,1,2,4,3]));


//Time Complexity : O(n)
//Space Complexity : O(n)


