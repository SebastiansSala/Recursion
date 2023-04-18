function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    const mergedArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            mergedArr.push(left.shift());
        }else{
            mergedArr.push(right.shift());
        }
    }
    return mergedArr.concat(left).concat(right);
}

console.log(mergeSort([10, 2, 5, 8, 7, 3, 1, 6, 9, 4]));