let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
}

let navBar= document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
     searchForm.classList.remove('active');
     navBar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index= (index +1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index= (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// !  ეს უნდა გავაკეთო ვალიდაციები   როგორ უნდა გავაკეთო ორი ალერტი ერთად

let nameY = document.querySelector('#name');
let confPassword = document.querySelector('#confPassword');
let email = document.querySelector(' #email');
let password = document.querySelector(' #password');
let btn = document.querySelector(' #logbtn');
let regBtn = document.querySelector('#regBtn');


// if(email !='' && password !=""){
//     btn.addEventListener('click', buyButtonClicked)
//     function buyButtonClicked(){
//         alert('Hey, You are long in');
// }
// }

if(nameY != '' && email !='' && password !="" && confPassword !=""){
    regBtn.addEventListener('click', clickRegBtn);
    function clickRegBtn(){
        alert('Congrats, You are here');
    }
}
