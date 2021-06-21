function numberOfWaysToTraverseGraph(width, height) {
    let ways = [];

    // 2- D array
    for (let i=0;i<height;i++) {
        let row = [];
        for(let j=0;j<width;j++) {
            row.push(j);
        }
        ways.push(row);
    }

    ways[0][0] = 1;

    // Dynamic programming for calculating ways

    for (let i=0;i<height;i++) {
        for (let j =0;j<width;j++) {
            if (j === 0 || i === 0) {
                ways[i][j] = 1;
            } else {
                ways[i][j] = ways[i][j-1] + ways[i-1][j];
            }
        }
    }

    console.log(ways[height-1][width-1])

    return ways[height-1][width-1];
  }

  numberOfWaysToTraverseGraph(3,3);