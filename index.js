// navbar animation
const navwrap= ()=>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.nav_links');
    const nav_links =document.querySelectorAll('.nav_links li');
// burger toggle
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav_active');
// lniks fade in
        nav_links.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation= `fade .5s ease forwards  ${index/7 +0.2 }s`;
            }
            
            
        })
        //burger cross animation
        burger.classList.toggle('cross');

    })
}
// calling the navbar function
navwrap();