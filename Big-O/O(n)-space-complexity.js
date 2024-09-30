// Space complexity O(n)
function arrayOfHiNTimes(n) {
    const hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray;
}

// ["hi","hi","hi","hi","hi","hi"]
console.log(JSON.stringify(arrayOfHiNTimes(6)) + "\n"); // O(n)

