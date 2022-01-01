function getCommentList(){
    $.ajax({
        method:"get",
        url:"http://www.liulongbin.top:3006/api/cmtlist",
        data:{},
        success:function (res) {
            if(res.status !== 200) return alert('获取数据失败')
            let rows = [];
            $.each(res.data, function (i, item){
                let str = '<li class="list-group-item"><span class="badge">'+item.time+'</span><span class="badge">'+item.username+'</span>'+item.content+'</li>'
                rows.push(str);
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}

getCommentList();

$(function (){
    $('#formAddCmt').submit(function (e){
        e.preventDefault();
        let data = $(this).serialize()
        $.post("http://www.liulongbin.top:3006/api/addcmt",data,function (res){
            if(res.status !== 201) return alert('发表评论失败')
            getCommentList();
        //    清空表单的数据
            /*$('#formAddCmt')[0]将jouery转化为Dom对象*/
            $('#formAddCmt')[0].reset();
        })
    })
})