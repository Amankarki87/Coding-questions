// Time - O(n^2)
// Space - O(n^2)

var generate = function (numRoms) {
    if (numRoms <= 0) {
        return [];
    }

    if (numRoms === 1) {
        return [[1]];
    }

    let result = [[1],[1,1]];
    
    for (let i = 2;i < numRoms;i++) {
        let res = [];
        res.push(1);
        
        let current = 1;
        for (let j = 1; j < result[result.length - 1].length;j++) {
            current += result[result.length - 1][j];
            res.push(current);
            current = result[result.length - 1][j];
        }

        res.push(1);
        result.push(res);
    }

    console.log(result);
    return result;

}

generate(5);