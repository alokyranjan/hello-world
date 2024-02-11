// Given an array of integers and a target number, find two numbers in the array that add up to the target. There may be multiple solutions.

function findTwoSum(nums, target) {
    // Store previously seen numbers and their indices in a hash map
    const seen = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed

        // Check if the complement exists in the map
        if (seen.has(complement)) {
            // Multiple solutions possible: return an array of indices
            return [seen.get(complement), i];
        }

        // Add current number and its index to the map
        seen.set(nums[i], i);
    }

    // No solution found
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = findTwoSum(nums, target);
console.log("Indices of numbers adding up to", target, result); // Output: [0, 1]
