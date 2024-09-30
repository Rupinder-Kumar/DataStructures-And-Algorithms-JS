const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') { // O(n)
            console.log("Found Nemo!");
        }
    }
}

// O(n) --> Linear Time
findNemo(nemo);
findNemo(everyone);

