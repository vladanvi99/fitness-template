//HEADER STICKY
if(document.querySelector("#top-header")){
  window.onscroll = function() {stickyHeaderFunction()};
  var header = document.querySelector("#top-header");
  var sticky = header.offsetTop + 100;
  function stickyHeaderFunction() {
    header.style.opacity=0;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-header");
      header.style.opacity=1
    } else {
      header.classList.remove("sticky-header");
      header.style.opacity=1

    }
  }
}
if(document.querySelector("#top-header-other")){
  window.onscroll = function() {stickyHeaderFunction()};
  var header = document.querySelector("#top-header-other");
  var sticky = header.offsetTop + 100;
  function stickyHeaderFunction() {
    header.style.opacity=0;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-header-other");
      header.style.opacity=1
    } else {
      header.classList.remove("sticky-header-other");
      header.style.opacity=1

    }
  }
}
//back to top
if(document.querySelector('.back-top')){
  let backTopBtn = document.querySelector('.back-top')
  window.addEventListener('scroll',() =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backTopBtn.style.opacity = "1";
    } else {
      backTopBtn.style.opacity = "0";
    }
  })
}
//HOME BANNER CAROUSEL
if(document.querySelector('.banner-carousel')){
  $(function(){
    $('.banner-carousel').slick({
      dots: false,
      infinite: true,
      prevArrow: ".arrow-prev",
      nextArrow: ".arrow-next",
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  })
}
//plan card
if(document.querySelectorAll('.plan-card .card-btn')){
  let cardBtn = [...document.querySelectorAll('.plan-card .card-btn')];

  function hoverOnCard(){
    this.parentElement.parentElement.classList.add('onHoverCard');
  }
  function hoverOutCard(){
    this.parentElement.parentElement.classList.remove('onHoverCard');
  }
  cardBtn.forEach(card=>card.addEventListener('mouseover',hoverOnCard))
  cardBtn.forEach(card=>card.addEventListener('mouseout',hoverOutCard))
}
//TESTIMONIAL SAYS CAROUSEL
if(document.querySelector('.testimonial-says-slider')){
  $(function(){
    $('.testimonial-says-slider .testimonial').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      arrows:false,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  })
}
//EXPERTS CAROUSEL
if(document.querySelector('.experts-slider-wrap')){
  $(function(){
    $('.experts-slider-wrap').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      prevArrow: ".arrow-prev",
      nextArrow: ".arrow-next",
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  })
}
//ABOUT GALLERY
if(document.querySelector('.main-gall-img')){
  
  let extGall = document.querySelector('#gallery-platform .exit-gall')
  let gallPlatform = document.querySelector('#gallery-platform')
  let gallMainImg = document.querySelector('#gallery-platform .main-gall-img')
  let gallImgs = [...document.querySelectorAll('#about-gallery .gall-img')]
  let gallArrR = document.querySelector('#gallery-platform .arrow-gall-next')
  let gallArrL = document.querySelector('#gallery-platform .arrow-gall-prev')
  function displayGall(){
    gallPlatform.style.display='flex'
    gallMainImg.src=this.src
  }
  gallImgs.forEach(gallImg => gallImg.addEventListener('click',displayGall))
  extGall.addEventListener('click',() => gallPlatform.style.display='none')
  gallArrL.addEventListener('click',()=>{
    let currentMainImgs = gallImgs.filter( oneImg => {
      return oneImg.src == gallMainImg.src
    })
    let currentMainImg = currentMainImgs.pop()
    let numOfImg = gallImgs.indexOf(currentMainImg)
    if(numOfImg == 0){
      gallMainImg.src = gallImgs[gallImgs.length-1].src;
    }else{
      gallMainImg.src = gallImgs[numOfImg - 1].src;
    }
    
  })
  gallArrR.addEventListener('click',()=>{
    let currentMainImgs = gallImgs.filter( oneImg => {
      return oneImg.src == gallMainImg.src
    })
    let currentMainImg = currentMainImgs.pop()
    let numOfImg = gallImgs.indexOf(currentMainImg)
    if(numOfImg == gallImgs.length-1){
      gallMainImg.src = gallImgs[0].src;
    }else{
      gallMainImg.src = gallImgs[numOfImg + 1].src;
    }
    
  })

}
//MESSAGE
if(document.querySelector('#message')){
  let otherChat = document.querySelector('.other-chats')
  let openBtn = document.querySelector('.open-chats')
  let extBtn = document.querySelector('.ext-btn')
  let friendsChat = [...document.querySelectorAll('.user')]
  openBtn.addEventListener('click',() => otherChat.style.display='block')
  extBtn.addEventListener('click',() => otherChat.style.display='none')
  function activeUser(){
    friendsChat.forEach(item => item.classList.remove('active-user'))
    this.classList.add('active-user')
  }
  friendsChat.forEach(item => item.addEventListener('click',activeUser))

}
//SEARCH WRAP
if(document.querySelector('#search-wrap')){
  let searchWrap = document.querySelector('#search-wrap')
  let searchBtn = document.querySelector('.searchBtn').addEventListener('click', () => {
    searchWrap.style.display='block'
  })
  let extSearch = document.querySelector('.extSearch').addEventListener('click', () => {
    searchWrap.style.display='none'
  })
}


