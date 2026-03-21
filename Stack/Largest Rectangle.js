/// Largest Rectangle in Histogram (Stack)

function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0); // sentinel

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    return maxArea;
}

// Example
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10





