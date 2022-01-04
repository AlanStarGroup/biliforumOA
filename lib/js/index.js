//等待页面加载完成执行的功能
$(document).ready(function(){
    //系统时间
    setInterval("document.getElementById('user_status_time').innerHTML=new Date().toLocaleString();", 1000);
})