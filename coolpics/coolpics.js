const menuButton = document.querySelector(".menu-button");
const menu=document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
    menuButton.classList.toggle('hide');
}

function handleResize(){
    if (window.innerWidth>1000){
        menu.classList.remove("hide")
    }  else{
        menu.classList.add("hide")
    }
}

handleResize();

menuButton.addEventListener("click", toggleMenu);

window.addEventListener("resize", handleResize)

gallery.addEventListener('click', (event)=>{
    modalimage.alt = alt;
    modal.showModal();
})


//close modal on button click
closeButton.addEventListener('click', ()=>{
    modal.close();
})

//close modal if clicking outside the image
modal.addEventListener('click', (event)=>{
    if (event.taget === modal){
        modal.close();
    }
}) 