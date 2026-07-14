let startY = 0;

document.addEventListener("touchstart", e => {

    startY = e.touches[0].clientY;

});

document.addEventListener("touchend", e => {

    let endY = e.changedTouches[0].clientY;

    if(startY - endY > 80){

        document.body.classList.add("unlock");

    }

});


// PC用（ドラッグ）

let mouseStart = 0;

document.addEventListener("mousedown",e=>{

    mouseStart=e.clientY;

});

document.addEventListener("mouseup",e=>{

    if(mouseStart-e.clientY>80){

        document.body.classList.add("unlock");

    }

});
