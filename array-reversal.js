// Array reversal
// Write a function that reverses an array of integers in place javascript


function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap the elements at the left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // Move the pointers towards the middle
        left++;
        right--;
    }

    return arr; // Return the modified array
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArrayInPlace(myArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
