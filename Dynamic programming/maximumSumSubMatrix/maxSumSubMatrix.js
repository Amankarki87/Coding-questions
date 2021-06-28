// Time complexity - O(w * h) | O(w * h)

function maximumSumSubmatrix(matrix, size) {
    let sums = getSums(matrix);
    let maxMatrixSum = getMaximumMatrixSum(matrix,sums,size);
    console.log(maxMatrixSum)
    return maxMatrixSum;
}

function getSums(matrix) {
    let sums = [];
    
    for (let pointer = 0;pointer < matrix.length; pointer ++) {
        let row = new Array(matrix[pointer].length).fill(0);
        sums.push(row);
    }

    sums[0][0] = matrix[0][0];
    
    for (let j = 1;j<matrix[0].length;j++) {
        sums[0][j] = sums[0][j-1] + matrix[0][j];
    }

    for (let i = 1;i<matrix.length;i++) {
        sums[i][0] = sums[i-1][0] + matrix[i][0];
    }

    // Time complexity - O(n * m)
    for (let i = 1;i<matrix.length;i++) {
        for (let j = 1;j<matrix[0].length;j++) {
            sums[i][j] = matrix[i][j] + sums[i][j-1] + sums[i-1][j] - sums[i-1][j-1];
        }
    }

    return sums;
}

function getMaximumMatrixSum(matrix,sums,size) {
    let maximumSum = -Infinity;
    let currentIndex = size - 1;

    for (let row = currentIndex;row<matrix.length;row++) {
        for (let column = currentIndex;column<matrix[row].length;column++) {
            
            let total = sums[row][column];

            let touchesTopBorder = row - size < 0;

            if (!touchesTopBorder) {
                total -= sums[row - size][column];
            }

            let touchesLeftBorder = column - size < 0;

            if (!touchesLeftBorder) {
                total -= sums[row][column - size];
            }

            let touchesBothBorder = touchesLeftBorder || touchesTopBorder;
            if (!touchesBothBorder) {
                total += sums[row - size][column - size];
            }

            maximumSum = Math.max(maximumSum,total);
        }
    }   

    return maximumSum;
}

maximumSumSubmatrix([[2, 4],[5, 6],[-3, 2]],2)