// Problem

// Given an array and window size k, find maximum element in every window.

// EXAMPLE
// Input:
// nums = [1,3,-1,-3,5,3,6,7]
// k = 3

// Output:
// [3,3,5,5,6,7]

// WINDOWS

// [1 3 -1] → 3
// [3 -1 -3] → 3
// [-1 -3 5] → 5
// [-3 5 3] → 5
// [5 3 6] → 6
// [3 6 7] → 7

function maxSlidingWindow(nums, k) {

    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        // remove elements outside window
        if (deque.length && deque[0] === i - k) {
            deque.shift();
        }

        // remove smaller elements
        while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);

        // window reached
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));





