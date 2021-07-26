/** 
 * Time complexity O(nlog(n))
 * Space complexity O(1)
*/

function nonConstructibleChange(coins) {
    coins.sort((a,b) => a - b);
    let currentChangeCreated = 0;

    for (const coin of coins) {
        if (coin > currentChangeCreated + 1 ) {
            return currentChangeCreated + 1;
        }
        currentChangeCreated += coin;
    }
    console.log(currentChangeCreated+1)
    return currentChangeCreated + 1;
}

nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]);