var sc = document.querySelector('#scroll ');
var justify = document.querySelector('.justify');
var background = document.querySelector('section.header ')
var menu = document.querySelector('section.header .header_head nav ul');
var close = document.querySelector('section.header .header_head nav li.close');
window.onscroll = function(){
     if(window.scrollY >= 100){
        sc.style.visibility = 'visible';
     }else if(window.scrollY == 0){
        sc.style.visibility = null;

     }
}
sc.onclick = function(){
    window.scrollTo({
        top : 0,
        left : 0 ,
        behavior : 'smooth'
    })
}
justify.onclick = function(){
    menu.style.transform = 'translate(0 , 100%)';
   
}
close.onclick = function(){
    menu.style.transform = 'translate(-120% , 100%)';
}

var apply = document.querySelector('section.header .header_content button');
var section_apply = document.querySelector('#apply');


    
         apply.onclick = function(){
            
                 window.scrollTo({
                    top : window.innerHeight,
                    left : 0 ,
                    behavior: 'smooth'
                  })
            }
   




