

const menu =  document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})







let listElements = document.querySelectorAll('.list-button-mobile--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = height + "px";
    })
})

