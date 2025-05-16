const menuButton = document.querySelector(".menu-button");
const menu=document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}


menuButton.addEventListener("click", toggleMenu);

function handleResize(){
    if (window.innerWidth>1000){
        menu.classList.remove("hide")
    }  else{
        menu.classList.add("hide")
    }
}

handleResize();

window.addEventListener("resize", handleResize)

//////////////////////////////////////////////////////////////
const gallery=document.querySelector('.gallery');

gallery.addEventListener('click', (event)=>{
    if (event.target.matches('img')) {
        const modal = document.createElement('dialog');
        modal.innerHTML =
        '<img id="modalImage" src="" alt=""><button id="closeButton">X</button>';
        document.body.appendChild(modal);

        const modalImage=modal.querySelector('#modalImage')
        const closeButton=modal.querySelector('#closeButton')
          
        const origSrc=event.target.src;
        const base=origSrc.split('-')[0];
        const fullSrc=base+'-full.jpeg';

        modalImage.src=fullSrc;
        modalImage.alt=event.target.alt
        modal.showModal();

        //close modal on button click
        closeButton.addEventListener('click', ()=>{
        modal.close();
        modal.remove();
        })
        //close modal if clicking outside the image
        modal.addEventListener('click', (event)=>{
            if (event.target === modal){
                modal.close();
                modal.remove();
            }
        });
    }
});
