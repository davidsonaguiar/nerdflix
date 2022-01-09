import list from "./lists.js";
import functions from "./functions.js";

//console.log()

//______________________________________________________

let boxImgs = document.getElementById('main-box-imgs');
let listImg = document.getElementsByTagName('main')[0];
let btnLeft = document.getElementsByClassName('left');
let btnRigth = document.getElementsByClassName('right');


functions.newDivNav(list, boxImgs, 'div');
functions.newDivNav(list, listImg, 'li');

for(let i = 0; i < btnLeft.length; i++){
    btnLeft.item(i).addEventListener(
        "click", (e) => {
            functions.back(e.target);
        }
    );
}

for(let i = 0; i < btnRigth.length; i++){
    btnRigth.item(i).addEventListener(
        "click", (e) => {
            functions.next(e.target);
        }
    );
}
