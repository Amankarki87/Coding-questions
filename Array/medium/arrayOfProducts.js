function arrayOfProducts(array) {
    let result = new Array(array.length).fill(1);
    let leftArrayProduct = 1;
    for (let i = 0; i < array.length; i++) {
        result[i] = leftArrayProduct;
        leftArrayProduct *= array[i];
    }

    let rightArrayProduct = 1;
    for (let j = array.length -1; j > -1;j--) {
        result[j] = result[j] * rightArrayProduct;
        rightArrayProduct *= array[j];
    }

    console.log(result);
    return result;
}

arrayOfProducts([5, 1, 4, 2])