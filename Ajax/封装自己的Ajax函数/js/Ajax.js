function  resolveData(data){
    let arr = [];
    for(let k in data){
        let str = k + '=' + data[k];
        arr.push(str)
    }

    return arr.join("&")
}

let res = resolveData({name:"kevienkai", age:29});
console.log(res)