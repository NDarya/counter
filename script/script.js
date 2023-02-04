let btnUp = document.querySelector('.btn-up')
let btnDown = document.querySelector('.btn-down')
let counter = document.querySelector('.counter')
let reset = document.querySelector('.reset')

btnUp.onclick = () => {
    if(btnUp.classList.contains('btn-up')){
        counter.innerText ++
    } 
}

btnDown.onclick = () =>{
    if(btnDown.classList.contains('btn-down')){
        counter.innerText -- 
    } 
}

reset.onclick = () =>{
    if(reset.classList.contains('reset')){
        counter.innerText = 0
    } 
}


