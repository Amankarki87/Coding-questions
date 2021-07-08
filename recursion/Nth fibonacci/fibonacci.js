// Time - O(2^n)
// Space - O(n)

// function getNthFib(n) {
//     if (n === 2) {
//         return 1;
//     } else if (n === 1) {
//         return 0;
//     } else {
//         let result = getNthFib(n-1) + getNthFib(n-2);
//         return result;
//     }
// }

// Time - O(n)
// Space - O(n)

// function getNthFib(n,memoize = {1 : 0,2:1}) {
//     if (n in memoize) {
//         return memoize[n];
//     } else {
//         memoize[n] = getNthFib(n-1,memoize) + getNthFib(n-2,memoize);
//         return memoize[n];
//     }
// }

// Time - O(n)
// Space - O(1)

function getNthFib(n) {
    const lastTwo = [0,1];
    let counter = 3;

    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }

    return n > 1? lastTwo[1] : lastTwo[0];
}

getNthFib(6);