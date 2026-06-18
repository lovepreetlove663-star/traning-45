let btn=document.getElementById("themeBtn");
btn.addEventListener("click",function(){
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode"))
{
    btn.innerHTML="$";
}else{
    btn.innerHTML="*";
}
});
