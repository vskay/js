function arrayToList(arr, i) {
    if (i == null){
        let i = 0;
        let list ={
            value: arr[i],
            rest: arrayToList(arr,i+1)
        };
        return list;
    }
    else if ( i = arr.length){
        let list ={
            value: arr[i],
            rest:null
        }
        return list;
    }
    else {
        let list ={
            value:arr[i],
            rest:arrayToList(arr, i+1)
        }
        return list;
    }
}

function listToArray(list, i) {
    if (i == null){
        let i = 0;
        let arr = [];
        arr[i] = list.value;
        console.log(list.value);
        arr.push(listToArray(list.rest,i+1));
        return arr;
    }
    else if ( list.rest == null){
        console.log(list.value);
        return list.value;
    }
    else {
       arr.push(listToArray(list.rest,i+1));
       return list.value;
    }
}


console.log(arrayToList([10, 20]));


console.log(listToArray(arrayToList([10, 20, 30])));

// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
