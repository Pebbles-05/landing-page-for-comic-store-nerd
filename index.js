// navbar animation
const navwrap= ()=>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.nav_links');
    const nav_links =document.querySelectorAll('.nav_links li ');
    const nav_atags = document.querySelectorAll('.nav_links li a');
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

// function for closing the nav when a link is clicked
        nav_atags.forEach((atag)=>{
            atag.addEventListener('click',()=>{
               burger.click();
            })
    
        })
        

    })
}
// calling the navbar function
navwrap();

// function for faq answers appearance

const answer_wrap = ()=>{
    const faq=document.querySelectorAll('.faqs');
    const arrow=document.querySelectorAll('.arrow i');
    const answer=document.querySelectorAll('.answers');
    
        faq.forEach((link)=>{
            link.addEventListener('click',()=>{
                link.classList.toggle('faq_active');
    
            })
        })
    
        
    
    }
    
// caling faq functions
    answer_wrap();


    // fading in of sections on scroll
    const fade_targets=document.querySelectorAll('.fade_target');
    const btt=document.querySelector('.btt');
    
    // options for observer
    const fadeoptions={
        root:null,
        rootmargin:"0px",
        threshold: 0.3
         
         
         }
    //observer function
    const fadeinonscroll= new IntersectionObserver((item,fadeinonscroll)=>{

        item.forEach(item=>{
            if(!item.isIntersecting){
                return;
            }
            else{
                item.target.classList.add('fade_active');
                btt.classList.add('btt_active');

                fadeinonscroll.unobserve(item);
            }
        })

    },fadeoptions);
    //targeting sections to observe

    fade_targets.forEach(target=>{
        fadeinonscroll.observe(target);
    })
    

    

