if (window.matchMedia("(min-width: 992px)").matches) {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    let accordionTrigger = $('.solutions-accordion-section-wrapper')
    
    let accordionOne = $('.solutions-accordion.index-1')
    let accordionTwo = $('.solutions-accordion.index-2')
    let accordionThree = $('.solutions-accordion.index-3')
    let accordionFour = $('.solutions-accordion.index-4')

    let accordionSize = "6.4em";
    
    
    
    // Define the timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: accordionTrigger,
        start: "top top", // Animation starts when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // Animation ends after scrolling 300% of the trigger's height
        scrub: true, // Smoothly reverses the animation on scroll back
       // markers: true, // Display markers for debugging
      }
    });
    
    // Add animations to the timeline
    tl.addLabel("start")
      //one - two
      .add([
        gsap.to(accordionOne, { height: accordionSize }),
        gsap.fromTo(accordionTwo, { height: accordionSize }, { height: "36.56em" })
      ])
      //two - three
      .add([
        gsap.to(accordionTwo, { height: accordionSize }),
        gsap.fromTo(accordionThree, { height: accordionSize }, { height: "36.56em" }),
    
      ])
      //three - four
      .add([
        gsap.to(accordionThree, { height: accordionSize }),
        gsap.fromTo(accordionFour, { height: accordionSize }, { height: "36.56em" }),
      ])
    .addLabel("end");
    }



$('.solutions-empower-list-item').click(function() {
    setTimeout (function (){
        ScrollTrigger.refresh()
    }, 600)
});




(function ($) {
    'use strict';
    $(".enpower-list-item-heading").on("click", function () {
      $(this).children(".drop-down-icon").toggleClass("rotate");
      $(".drop-down-icon").not($(this).children(".drop-down-icon")).removeClass("rotate");
      $(this).next().slideToggle(300);
      $(".empower-description-wrapper").not($(this).next()).slideUp("fast");
      //Scroll to top for each accordion that is clicked.
      // The "180" is the distance from top. The "300" is the scroll speed. The "400" is for the animation delay depending on inner content length.    
      setTimeout(() => { 
        $('html').animate({scrollTop: $(this).offset().top-180}, 300);
      }, 400);
    });
  }(jQuery));


	// For Nested Accordions
  (function ($) {
    'use strict';
    $(".focus-item").on("click", function () {
      $(this).children(".focus-item-arrow").toggleClass("active");
      $(".focus-item-arrow").not($(this).children(".focus-item-arrow")).removeClass("active");
      $(this).next().slideToggle(300);
      $(".focus-tab-content-wrapper").not($(this).next()).slideUp(300);
    });
  }(jQuery));





// Get the header element
var header = document.querySelector('.header-section');

// Function to handle scroll event
function handleScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Remove "initial" class after scrolling 100px
    if (scrollTop > 100) {
        header.classList.remove('initial');
    } else {
        header.classList.add('initial');
    }

    // Add "scrolled" class when scrolling back up between 10-30px after scrolling down more than 300px
    if (scrollTop > 300) {
        header.classList.remove('scrolled');
    } else if (scrollTop < 30 && scrollTop > 300) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Attach the scroll event handler
window.addEventListener('scroll', handleScroll);


// Get the header element
var header = document.querySelector('.header-section');
var gradient = document.querySelector('.header-bg-gradient');

// Variable to keep track of the last scroll position
var lastScrollTop = 0;

// Variable to track the last position where is--visible was toggled
var lastVisibleTogglePosition = 0;

// Function to handle scroll event
function handleScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Remove "initial" class after scrolling 50px
    if (scrollTop > 100) {
        header.classList.remove('initial');
    } else {
        header.classList.add('initial');
    }

    // Add or remove "scrolled" class
    if (scrollTop > 200) {
        gradient.classList.add('scrolled');
    } 

    if (scrollTop < 1) {
        
        gradient.classList.remove('scrolled');
        gradient.classList.remove('active');
      //  gradient.classList.remove('is--visible');
        lastVisibleTogglePosition = scrollTop; // reset toggle position when scrolled class is removed
    }

    // Check if "scrolled" class is active
    if (gradient.classList.contains('scrolled')) {
        if (scrollTop > lastScrollTop && scrollTop > lastVisibleTogglePosition + 30) {
            // Scrolling down more than 30px from last toggle position
            header.classList.remove('is--visible');
            gradient.classList.remove('active');
            lastVisibleTogglePosition = scrollTop;
        } else if (scrollTop < lastScrollTop && lastVisibleTogglePosition - scrollTop >= 30) {
            // Scrolling up more than 30px from last toggle position
            header.classList.add('is--visible');
            gradient.classList.add('active');
            lastVisibleTogglePosition = scrollTop;
        }
    }

    // Update the last scroll position
    lastScrollTop = scrollTop;
}

// Attach the scroll event handler
window.addEventListener('scroll', handleScroll);



//variables

//Images
let svgImageOne = $('.svg-bg-image.num1');
let svgImageTwo = $('.svg-bg-image.num2');
let svgImageThree = $('.svg-bg-image.num3');
let svgImageFour = $('.svg-bg-image.num4');
let svgBackgroundImg = $('.svg-bg-image.background-image')

//Gradients
let overlayOne = $('.image-overlay.color-1');
let overlayTwo = $('.image-overlay.color-2');
let overlayThree = $('.image-overlay.color-3');
let overlayFour = $('.image-overlay.color-4');
let backgroundOverlay = $('.background-overlay');


// Part 1: Animation that plays once
let initialAnimation = gsap.timeline();
initialAnimation.add([
    gsap.from(svgImageOne, { scale: 1.5, duration: 1.5 }),
    gsap.to(".image-overlay.inner", { xPercent: 100, yPercent: -10, duration: 1.5 })
]);

// Part 2: Animation that loops with a delay
let tl = gsap.timeline({ defaults: { ease: "power4.out" }, repeat: -1 });

tl.addLabel("start");

// Delay before starting Part 2
tl.add(() => {}, initialAnimation.duration());

//two - three
tl.add([
    gsap.to(overlayOne, { opacity: 0, yPercent: 0, duration: 1.5 }),
    gsap.to(svgImageOne, { scale: 1.5, duration: 1.5, delay: 0.1, clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)" }),
    gsap.from(svgImageTwo, { scale: 1.5, duration: 1.5 })
], "+=1")
.add([
    gsap.to(overlayTwo, { opacity: 0, yPercent: 0, duration: 1.5 }),
    gsap.to(svgImageTwo, { scale: 1.5, duration: 1.5, delay: 0.1, clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)" }),
    gsap.from(svgImageThree, { scale: 1.5, duration: 1.5 })
], "+=1")
//three - four
.add([
    gsap.to(overlayThree, { opacity: 0, yPercent: 0, duration: 1.5 }),
    gsap.to(svgImageThree, { scale: 1.5, duration: 1.5, delay: 0.1, clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)" }),
    gsap.from(svgImageFour, { scale: 1.5, duration: 1.5 })

], "+=1")
//Four - four
.add([
    gsap.to(overlayFour, { opacity: 0, yPercent: 0, duration: 1.5 }),
    gsap.to(svgImageFour, { scale: 1.5, duration: 1.5, delay: 0.1, clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)" }),
    gsap.from(svgImageOne, { scale: 1.5, duration: 1.5 }),
    gsap.from(svgBackgroundImg, { scale: 1.5, duration: 1.5 })
], "+=1")
.addLabel("end");




