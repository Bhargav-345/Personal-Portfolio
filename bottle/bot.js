function clock(){
    let now=new Date();
    let datet=now.toLocaleString();
    document.getElementById('set').innerText=datet;
}
clock();
setInterval(clock,1000);
