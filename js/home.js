function abrirMenu(){
    
    document.getElementById('nav').style.width = "300px";
}
function fecharMenu()
{
    document.getElementById('nav').style.width = "0px"
}

AOS.init({
    duration:1000,
});