
let jstriggers= document.getElementById(`js-triggers`).getElementsByTagName(`a`);
let showMenuButton=jstriggers[0];
let showModalButton=jstriggers[1];
let navigator=document.querySelector(`nav`);

let modalBackground= document.querySelector(`.modal-panel`);
let mainclick=document.querySelector(`main`);

let viewportsize= window.innerWidth;

if(viewportsize<736){
    document.querySelector(`.modal-content-pane`).style.innerWidth=300;
    navigator.style.display=screenLeft;
    navigator.style.display=screenTop;
}

function displayModal(){
    document.querySelector(`.modal-panel`).style.visibility=`visible`;
    document.querySelector(`.modal-content-pane`).style.visibility=`visible`;
}

function closeModal(){
    document.querySelector(`.modal-panel`).style.display=`none`;
    console.log(`testing this close`);
}

function showMenu(){
    navigator.style.visibility=`visible`;
    console.log(`testing the menu button`);
}

function closeMenu(){
    navigator.style.display=`none`;
}

//reveals and closes the modal
showModalButton.addEventListener(`click`,displayModal);
modalBackground.addEventListener(`click`,closeModal);

//reveals and closes the menu
showMenuButton.addEventListener(`click`,showMenu);
mainclick.addEventListener(`click`,closeMenu);

script=document.createElement(`script`);

