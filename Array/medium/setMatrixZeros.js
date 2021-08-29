// Time - O(nm)
// Space - O(n + m)

// var setZeroes = function (matrix) {
//     let zeroRows = {};
//     let zeroColumns = {};

//     for (let i = 0;i < matrix.length;i++) {
//         for (let j = 0;j<matrix[0].length;j++) {
//             if (matrix[i][j] === 0) {
//                 zeroRows[i] = true;
//                 zeroColumns[j] = true;
//             }
//         }
//     }

//     for (let i = 0;i < matrix.length;i++) {
//         for (let j = 0;j < matrix[0].length;j++) {
//             if (zeroRows[i] || zeroColumns[j]) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     console.log(matrix);
//     return matrix;
// }


var setZeroes = function (matrix) {

    let firstRow = false;
    let firstColumn = false;

    for (let i = 0;i<matrix.length;i++) {
        if (matrix[i][0] === 0) {
            firstRow = true;
            break;
        }
    }

    for (let i = 0;i<matrix[0].length;i++) {
        if (matrix[0][i] === 0) {
            firstColumn = true;
            break;
        }
    }

    for (let i = 1;i<matrix.length;i++) {
        for (let j = 1;j<matrix[0].length;j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1;i<matrix.length;i++) {
        for (let j = 1;j<matrix[0].length;j++) { 
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRow) {
        for(let i = 0;i < matrix.length;i++) {
            matrix[i][0] = 0;
        }
    }

    if (firstColumn) {
        for(let i = 0;i < matrix[0].length;i++) {
            matrix[0][i] = 0;
        }
    }

    console.log(matrix);
    return matrix;
}
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);