// Trapping Rain Water (Stack)
// Concept: Use a monotonic decreasing stack to calculate trapped water between bars.

// Idea: When you find a taller bar, you can trap water using previous smaller bars.

// ⏱ Time: O(n)

function trap(height) {
    let stack = [];
    let water = 0;

    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop();

            if (!stack.length) break;

            let distance = i - stack[stack.length - 1] - 1;
            let boundedHeight = Math.min(
                height[i],
                height[stack[stack.length - 1]]
            ) - height[top];

            water += distance * boundedHeight;
        }
        stack.push(i);
    }

    return water;
}

// Example
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6






