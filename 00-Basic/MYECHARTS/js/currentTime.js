let t = null;
t = setTimeout(time, 1000);

function time(){
    clearTimeout(t);
    let dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth()+1;
    let day = dt.getDate();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();

    document.querySelector(".showTime").innerHTML = "当前时间：" 
        + y + "年" + mt + "月" + day + "日" 
        + "-" + h + "时" + + m + "分" + s + "秒";
    t = setTimeout(time, 1000);
}