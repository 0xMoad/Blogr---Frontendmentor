const accordion = document.getElementsByClassName("container");

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click",function(){
        accordion[i].classList.toggle("active");
    })
}