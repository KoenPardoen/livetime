function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = "het is nu " + h + ":" + m + ":" + s;
    var t  = setTimeout (startTime, 500);
}

  setTimeout(function(){
   window.location.reload(1);
}, 64525);

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
