//// Sliding Window Maximum (Deque / Queue)

//// Use a deque (double-ended queue) to keep track of max elements.


function maxSlidingWindow(nums, k) {
    let deque = []; // stores indices
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove out-of-window elements
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Maintain decreasing order
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // Window formed
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// Output: [3,3,5,5,6,7]





