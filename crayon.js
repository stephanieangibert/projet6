let crayon=document.getElementById("crayon");

crayon.addEventListener("click",function(){
    console.log(document.getElementsByTagName("i"));
   
    document.getElementsByTagName("i")[1].classList.toggle("fa-thumbs-up");
   document.getElementById("apparaitre").classList.toggle("change");
   document.getElementById("photo").classList.toggle("photobas");
   document.getElementById("item1").classList.toggle("changebis");

  
})
let contenu=document.getElementById("start");

let distance=contenu.offsetTop;
console.log(distance);
let boite=document.getElementsByClassName("box")[0];
let boite1=document.getElementsByClassName("box")[1];
let boite2=document.getElementsByClassName("box")[2];
console.log(boite);
window.onscroll=function(){
    if(document.documentElement.scrollTop>700){
        boite.classList.add("box1");
        boite1.classList.add("box1");
        boite2.classList.add("box1");
}

}



          
           