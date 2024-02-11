// Given a target amount money and an array of coin denominations denominations, write a function that recursively calculates the number of different ways to make up the target amount using the available coins. The function should:

// Handle scenarios where the target amount is 0 (one way: using no coins).
// Handle cases where the target amount is negative or denominations contain invalid elements (return 0).
// Not use tabulation or dynamic programming (focus purely on recursion).

function countCoinCombinations(money, denominations) {
    // Base cases:
    if (money === 0) return 1; // Reach target with no coins
    if (money < 0 || denominations.some(coin => coin <= 0)) return 0; // Invalid input

    // Explore combinations using each coin denomination:
    let count = 0;
    for (const coin of denominations) {
        // Recursive call with remaining amount after using the coin
        count += countCoinCombinations(money - coin, denominations);
    }

    return count;
}

// Example usage
const money = 5;
const denominations = [1, 2, 5];

const combinations = countCoinCombinations(money, denominations);
console.log("Number of combinations:", combinations); // Output: 4


function countCoinCombinations(money, denominations) {
    // Base cases:
    if (money === 0) return [[]]; // Empty combination for reaching target with no coins
    if (money < 0 || denominations.some(coin => coin <= 0)) return []; // Invalid input

    // Explore combinations using each coin denomination:
    const combinations = [];
    for (const coin of denominations) {
        // Recursive call with remaining amount
        const remainingCombinations = countCoinCombinations(money - coin, denominations);

        // Add current coin to each remaining combination
        for (const combination of remainingCombinations) {
            combinations.push([coin, ...combination]);
        }
    }

    return combinations;
}

// Example usage
const money = 5;
const denominations = [1, 2, 5];

const allCombinations = countCoinCombinations(money, denominations);
console.log("All possible combinations:", allCombinations);
