let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    
    if (current == 'dark'){
        document.body.className = 'dark';
        //add different image by changing src
        newImage=document.querySelector('img');
        newImage.setAttribute('src', 'byui-logo_white.png');
    }
    else {
        document.body.classList.remove('dark');
        //change image
        newImage=document.querySelector('img');
        newImage.setAttribute('src', 'byui-logo.webp');
    }
}