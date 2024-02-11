// Design an algorithm to encode and decode a string with repetitions, where numbers represent the frequency of characters. (e.g., "a3b2" encodes to "aaabbb")

function encode(text) {
    const charCounts = {};
    for (const char of text) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    return Object.entries(charCounts).map(([char, count]) => `${char}${count}`).join("");
}

function decode(encodedText) {
    const encodedChars = encodedText.match(/(\w)(\d*)/g);
    return encodedChars.map(([char, count]) => char.repeat(parseInt(count))).join("");
}

// Example usage
const text = "aaabbb";
const encodedText = encode(text);
console.log("Encoded text:", encodedText); // Output: a2b2

const decodedText = decode(encodedText);
console.log("Decoded text:", decodedText); // Output: aaabbb
