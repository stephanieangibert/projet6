var fleche=document.getElementById("chevron");
var texte=document.getElementById("retour");
fleche.addEventListener("mouseover",function(){
texte.style.opacity="1";
});
fleche.addEventListener("mouseout",function(){
    texte.style.opacity="0";
    });