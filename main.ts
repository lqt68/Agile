function rest(amount: number, coins: number[]): number[] | null {
    const dp: (number[] | null)[] = new Array(amount + 1).fill(null);
    dp[0] = [];

    const sortedCoins = [...coins].sort((a, b) => b - a);

    for (let i = 1; i <= amount; i++) {
        for (const coin of sortedCoins) {
            if (i >= coin && dp[i - coin] !== null) {
                const currentCombination = [coin, ...dp[i - coin]!];
                if (dp[i] === null || currentCombination.length < dp[i]!.length) {
                    dp[i] = currentCombination;
                }
            }
        }
    }

    return dp[amount];
}

console.log(rest(9, [1, 2, 5, 10, 25, 50])); // [5, 2, 2]
console.log(rest(14, [1, 2, 5, 10, 25, 50])); // [10, 2, 2]
console.log(rest(56, [1, 2, 5, 10, 25, 50])); // [50, 5, 1]
console.log(rest(23, [1, 2, 5, 10, 25, 50])); // [10, 10, 2, 1]
console.log(rest(21, [1, 2, 5, 10, 25, 50])); // [10, 10, 1]
console.log(rest(21, [2, 5, 10, 25, 50])); // [10, 5, 2, 2, 2]
console.log(rest(23, [2, 5, 10, 25, 50])); // [10, 5, 2, 2, 2, 2]
console.log(rest(53, [2, 5, 10, 25, 50])); // [25, 10, 10, 2, 2, 2, 2];
console.log(rest(43, [2, 5, 10, 50])); // [10, 10, 10, 5, 2, 2, 2, 2]
console.log(rest(3, [5, 10])); // null
