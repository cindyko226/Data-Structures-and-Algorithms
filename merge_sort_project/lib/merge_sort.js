function merge(array1, array2) {

    let res = [];
    while(array1.length !== 0  && array2.length !== 0) {
        if(array1[0] <= array2[0]){
            res.push(array1.shift());
        }else{
            res.push(array2.shift());
        }
    }
    return res.concat(array1, array2);
}

function mergeSort(array) {
    if ( array.length <= 1) return array;

    let midIndex = Math.floor(array.length / 2);
    let leftSort = mergeSort(array.slice(0, midIndex));
    let rightSort = mergeSort(array.slice(midIndex));
    return merge(leftSort, rightSort);
}

module.exports = {
    merge,
    mergeSort
};