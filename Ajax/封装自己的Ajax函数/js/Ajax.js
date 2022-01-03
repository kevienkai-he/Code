function resolveData(data){
    let arr = [];
    for(let k in data){
        let str = k + "=" + data[k];
        arr.push(str);
    }
    return arr.join("&");
}
function myAjax(option){
    /*1、创建xhr对象*/
    let xhr = new XMLHttpRequest();
    //返回处理后的数据
    let qs = resolveData(option.data);
    if(option.method.toUpperCase() === 'GET'){
        xhr.open(option.method, option.url + "?" + qs);
        xhr.send()
    }
    else if(option.method.toUpperCase() === 'POST'){
        xhr.open(option.method, option.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }

    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            let result = JSON.parse(xhr.responseText);

            option.success(result);
        }
    }
    /**/
}
