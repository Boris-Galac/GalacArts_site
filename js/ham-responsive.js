
let btnHam = document.querySelector('#ham')
let btnClose = document.querySelector('#close')
let nav =  document.querySelector('.side-nav')
let page1 = document.querySelector('#page1')

// btnHam.onclick = function(){
//     document.querySelector('.side-nav').style.width = '95%';
// }
// btnClose.onclick = function(){
//     document.querySelector('.side-nav').style.width = '0%';

// }

btnHam.onclick = function(){
   nav.classList.toggle('none')
//    btn.style.display = 'none';
}
btnClose.onclick = function(){
    nav.classList.toggle('none')
}
page1.onclick = function(e){
    if(e.target === e.currentTarget && nav.classList.contains('none')){     
        nav.style.display = 'none'
    }
}

if(screen.width > 400){
    btnClose.style.display = 'none'
}

