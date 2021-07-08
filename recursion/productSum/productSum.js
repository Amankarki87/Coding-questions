// Time - O(N) - No of total element in each element consiting of sub array element.
// Space - O(d) - No of depth of sub array. 

function productSum(array,multiplier = 1) {
    let sum = 0;
    
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element,multiplier + 1);
        } else {
            sum += element;
        }
    }

    console.log(sum * multiplier);
    return sum * multiplier;

}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);