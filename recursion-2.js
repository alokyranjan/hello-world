// Given a nested list of numbers, write a function that recursively calculates the sum of all numbers within the list, including elements in any nested sub-lists.

// Examples:

// The sum of [1, 2, [3, 4], 5] is 15.
// The sum of [[1], [2, [3]]] is 6.

// Constraints:

// The nested list can contain any number of levels of nesting.
// All elements within the list are numbers.
// The function should only use recursion, no loops or iteration.


function nestedListSum(nestedList) {
    // Base cases:
    if (nestedList.length === 0) return 0; // Empty list
    if (!Array.isArray(nestedList)) return nestedList; // Single number

    // Recursively sum elements and sub-lists:
    let sum = 0;
    for (const element of nestedList) {
        sum += nestedListSum(element);
    }

    return sum;
}

// Example usage:
const nestedList1 = [1, 2, [3, 4], 5];
const nestedList2 = [[1], [2, [3]]];

const sum1 = nestedListSum(nestedList1);
const sum2 = nestedListSum(nestedList2);

console.log("Sum of nestedList1:", sum1); // Output: 15
console.log("Sum of nestedList2:", sum2); // Output: 6
