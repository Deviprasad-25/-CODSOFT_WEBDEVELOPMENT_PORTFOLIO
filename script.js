let nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinScroll',window,scrollY>0)
})
document.getElementsById("form-bottom").addEventListener("btn-primary",function()
{
    alert("subitted successfully");
    
})
    
