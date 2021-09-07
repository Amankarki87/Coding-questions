function threeNumberSort(array, order) {
    let orders = [];

    for (let i = 0; i< array.length;i++) {
        if (array[i] === order[0]) {
            orders.push(array[i]);
        }
    }

    for (let i = 0; i< array.length;i++) {
        if (array[i] === order[1]) {
            orders.push(array[i]);
        }
    }

    for (let i = 0; i< array.length;i++) {
        if (array[i] === order[2]) {
            orders.push(array[i]);
        }
    }

    console.log(orders)
    return orders;
}

threeNumberSort([1,0,0,-1,-1,0,1,1],[0,1,-1]);