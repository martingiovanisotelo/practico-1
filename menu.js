const btnmenu = document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");
btnmenu.addEventListener("click", function(){
menu.classList.toggle("mostrar");

});
const submenubtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i < subMenubtn.length; i++) {
    submenubtn[i].addEventListener("click", function() {
        if(window.innerWidth < 1024 ){
            const submenu = this.nextelementSibling;
            const heigth = submenu.scrollheight;

if(submenu.classList.contains("desplegar")){
    submenu.classList.remove("desplegar");
    submenu.removeAttribute("style");
} else {
    submenu.classList.add("desplegar");
    submenu.style.heigth = heigth + "px";
       }
    }
    });     
}

