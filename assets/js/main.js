const navmenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navclose = document.getElementById('nav-close');


if(navToggle){

    navToggle.addEventListener('click', ()=>{
        navmenu.classList.add('show-menu')
    })

}

if(navclose){
    navclose.addEventListener('click', ()=>{
        navmenu.classList.remove('show-menu')
    })
}