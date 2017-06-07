Array.prototype.map = function (cb) { 
    let newArr=[]
    this.forEach((val)=>{
        newArr.push(cb(val))
    })
    return newArr
} 

// const arr = [1,2,3];
// console.log(arr.map((val) => val * val) )