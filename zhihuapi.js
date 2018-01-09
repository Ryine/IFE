var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        console.log('success');
    }
}
xmlhttp.open('get','https://zhihu-daily.leanapp.cn/api/v1/last-stories',true);
xmlhttp.send();

