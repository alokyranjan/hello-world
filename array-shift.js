// move all zeros to the right side of the array

function moveZeros(arr) {
    let nonZeroIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[nonZeroIdx]] = [arr[nonZeroIdx], arr[i]];
            nonZeroIdx++;
        }
    }
    return arr;
}

// Example usage
const arr = [0, 1, 0, 3, 12, 0];
const arrAfter = moveZeros(arr);
console.log("Array after moving zeros:", arrAfter); // Output: [1, 3, 12, 0, 0, 0]
