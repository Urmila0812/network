
// hambarger
const burgerMenu = document.getElementById('burgerMenu')
let menuOpen = false;
burgerMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!menuOpen) {
        let elems = document.getElementsByClassName('nav-item-mobile-link');
        for (let i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
        }
        menuOpen = true;
    }else{
        let elems = document.getElementsByClassName('nav-item-mobile-link');
        for (let i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
        }
        menuOpen = false;
    }
})


// add click content disply-----

// .secure-card-image span 

const displayCard1 = document.getElementById('displayCard1')

displayCard1.addEventListener('click',()=>{
    const element =document.getElementById("displayContent1")
    element.classList.toggle("is-hidden");
    displayCard1.classList.toggle("secure-card-image");
    displayCard1.classList.toggle("span")
})


const displayCard2 = document.getElementById('displayCard2')

displayCard2.addEventListener('click',()=>{
    const element =document.getElementById("displayContent2")
    element.classList.toggle("is-hidden");
})


const displayCard3 = document.getElementById('displayCard3')

displayCard3.addEventListener('click',()=>{
    const element =document.getElementById("displayContent3")
    element.classList.toggle("is-hidden");
})


// const imageContainer = document.querySelector(".slide-para");
// const prevBtn = document.querySelector("#prev");
// const nextBtn = document.querySelector("#next");

// let x = 0;

// nextBtn.addEventListener("click", ()=>{
//     x = (x+1)%4;
//     // rotate();
// })


// prevBtn.addEventListener("click" , ()=>{
//     x = (x-1+4)%4;
//     // rotate();
// })


// function rotate(){
//     imageContainer.style.transform = `perspective(1400px) rotateY(${x}deg)`
// }



// slider 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-para");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//card-rotate---------------------------


const firstCardrotate = document.getElementById('packagerotate')
let displayFirst = true;

firstCardrotate.addEventListener('click',()=>{
    if(displayFirst){
        const element =document.getElementById("packagerotate")
        element.style.transform = 'skewX(0deg)';
        displayFirst =false;
    }else{
        const element =document.getElementById("packagerotate")
        element.style.transform = 'skewX(10deg)';
        displayFirst =true;
    }
    
})


const secondCardrotate = document.getElementById('packagerotatetwo');
let displaySecond = true;

secondCardrotate.addEventListener('click',()=>{
    if(displaySecond){
        const element =document.getElementById("packagerotatetwo")
        element.style.transform = 'skewX(0deg)'
        displaySecond = false;
    }else{
        const element =document.getElementById("packagerotatetwo")
        element.style.transform = 'skewX(10deg)'
        displaySecond = true;
    }
})

// fetch---------
let products =[];
const productPerPage = 6;
let loadedProducts = 0;
const loadMorebtn = document.querySelector("#load-more-btn");

function getProducts(){
    fetch("https://fakestoreapi.com/products").then((response)=>{return response.json()
    }).then((data)=>{
        products = data
        loadProducts()
        loadMorebtn.style.display = "block";
         const btnPorducts = document.getElementById('products');
         btnPorducts.style.display = 'none'
    })
}
function loadProducts(){
    const images = document.querySelector('.product-images');
    for(let i=loadedProducts; i < Math.min(loadedProducts+productPerPage,products.length); i++){
        const img = document.createElement('img');
        img.classList.add("product-image");
        img.src = products[i].image;
        images.appendChild(img);
    }
    loadedProducts +=productPerPage;
    if(loadedProducts>=products.length){
        loadMorebtn.style.display = "none"
    }
}
loadMorebtn.addEventListener('click',()=>{
    loadProducts()
})