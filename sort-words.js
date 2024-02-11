// Write a program that sorts a list of words alphabetically, but prioritize shorter words over longer ones in case of equal alphabetical order javascript

function customSort(words) {
    // Function to create a custom sorting key
    const customKey = (word) => {
        return [word.toLowerCase(), word.length]; // Combine lowercase word and length
    };

    // Sort the words using the custom key
    return words.sort((a, b) => {
        const [keyA, lengthA] = customKey(a);
        const [keyB, lengthB] = customKey(b);

        // Compare based on key (alphabetical order)
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;

        // If keys are equal, prioritize shorter word
        return lengthA - lengthB;
    });
}

// Example usage
const words = ["apple", "banana", "mango", "peach", "pineapple"];
const sortedWords = customSort(words);
console.log("Sorted words:", sortedWords);