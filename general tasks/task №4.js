const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const filterArray = (array, fn) => {
    const result = [];

    array.forEach(num => {
        if (fn(num)) {
            result.push(num)
        }
    });

    return result;
}

const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const isSeventyFour = (num) => {
    return num === 74
}


console.log(filterArray(mixedArray, isEven));
