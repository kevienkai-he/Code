$(function (){
    //给时间补充0
    function padZero (n){
        if (n < 10){
            return '0' + n
        }
        else {
            return n
        }
    }
    template.defaults.imports.dataFormat = function (dtStr){
        let dt = new Date(dtStr);
        let y = padZero (dt.getFullYear());
        let m = padZero (dt.getMonth() + 1);
        let d = padZero (dt.getDate());
        let hh = padZero (dt.getHours());
        let mm = padZero (dt.getMinutes());
        let ss = padZero (dt.getSeconds());
        return y + '-' + m + '-' + d + '  ' + hh + ':' + mm + ':' + ss;
    }
    function getNewsList(){
        $.get('http://www.liulongbin.top:3006/api/news', function (res){
            if(res.status !== 200) return  alert("服务请求失败！")
            for(let i = 0;i < res.data.length;i++){
                res.data[i].tags = res.data[i].tags.split(',');
            }
            console.log(res);
            let htmlStr = template('tpl-news', res);
            $('#news-list').html(htmlStr);
        })
    }
    getNewsList()
})