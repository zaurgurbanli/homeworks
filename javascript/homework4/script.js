function filterBy(array, dataType) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== dataType)
            newArray.push(array[i]);
    }
    console.log(newArray);
}

let array=['hello', 'world', 23, '23', null];
let dataType = prompt("Enter data type:");

filterBy(array, dataType);