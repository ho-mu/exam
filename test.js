function reverseArr(arr) {
    let temp
    let counter=arr.length-1

    for(let x=0; x<arr.length-1; x++){
            temp=arr[x]
            arr[x] = arr[counter]
            arr[counter] = temp
            counter-=1
    }
}

const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];