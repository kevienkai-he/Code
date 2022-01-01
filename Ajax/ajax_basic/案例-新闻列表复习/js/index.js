
$(function (){
    function addZero(n) {
        if(n < 10){
            return "0" + n
        }
        else {
            return n
        }
    }
    template.defaults.imports.timeFilter = function (str){
        let date = new Date(str);
        let y = addZero(date.getFullYear());
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let hh = addZero(date.getHours());
        let mm = addZero(date.getMinutes());
        let ss = addZero(date.getSeconds());
        return y + '-' + m + '-' + d + '  ' + hh + ':' + mm + ':' + ss;
    }

    /*获取新闻列表*/
    function  getNewsList(){
        //向服务器发起get请求
        $.get("http://www.liulongbin.top:3006/api/news", function (res){
            for(let i = 0;i<res.data.length;i++){
                res.data[i].tags = res.data[i].tags.split(',');
            }
            if(res.status !== 200) {
                return alert("获取数据错误")
            }
            let htmlStr = template('art-news', res);
            $('#news-list').html(htmlStr);
        })
    }
    getNewsList();
})