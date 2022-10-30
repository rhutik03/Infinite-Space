const menu = document.querySelector('.hamburger');
const navlink = document.querySelector('.nav_link');
const planets = document.querySelector('.planets');
const planetli =document.querySelector('.planetsli');
const pli = document.querySelector('.pli');
const loader = document.querySelector(".loader");
const apiK = "E8b5KqcORcYKpfF2tHjsWdOCYfaxAP3IZBuzAc2I";

menu.addEventListener('click',()=>{
    if(!planetli.classList.contains('hidepl')){
        planetli.classList.toggle('hidepl');
    }
    navlink.classList.toggle('hide');
})

planets.addEventListener('click',()=>{
    navlink.classList.toggle('hide');                    //check later not working in mobile nav.js hamburger class
    planetli.classList.toggle('hidepl');                //
    console.log("Working");
})

// pli.addEventListener('click',()=>{
    
// })

const date = new Date();
let day = date.getDate()-1;
let month = date.getMonth()+1;
let year = date.getFullYear();

let currDate = year+"-"+month+"-"+day;
const api_url = "https://api.nasa.gov/planetary/apod?api_key="+apiK+"&date="+currDate+"&hd=true"

console.log(currDate)

async function getPOD() {
  console.log("hell")
  const resp = await fetch(api_url);
  const data = await resp.json();
  console.log(data)
}


window.onload = function(){
  document.body.style.overflow="hidden";
  setTimeout(function(){
    loader.style.opacity = "0%";
    setTimeout(function(){
      loader.style.display = "none";
    }, 500);
  },800);
  setTimeout(function(){
    document.body.style.overflow="scroll";  
  }, 1000);
  getPOD();
}

window.onscroll = function() {myFunction()};

// Get the navbar
    var navbar = document.querySelector(".nav");

// Get the offset position of the navbar
    var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

window.onclick = function(e) {
    if (!e.target.matches('.planets','.nav_link') && !e.target.matches('.hamburger','.line')) {
    let pldown = document.querySelector('.planetsli');
    let Mdown = document.querySelector('.nav_link');
      if (!pldown.classList.contains('hidepl') || !Mdown.classList.contains('.hide')) {
        pldown.classList.add('hidepl');
        Mdown.classList.add('hide');
      }
    }
  }





