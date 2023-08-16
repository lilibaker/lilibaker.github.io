
// Navbar effects
// const links = document.querySelectorAll('.link');
// const sections = document.querySelectorAll('section');
//
// let activeLink = 0;
//
// links.forEach((link, i) => {
//     link.addEventListener('click', () => {
//         if(activeLink != i){
//             links[activeLink].classList.remove('active');
//             link.classList.add('active');
//             sections[activeLink].classList.remove('active');
//
//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add('active');
//             }, 1000);
//         }
//     })
// })
// $(function() {
//  $(window).on("scroll", function() {
//     if($(window).scrollTop() > 280) {
//         //background on scroll
//         $("#navbar").addClass("scroll");
//     } else {
//         //background at top
//        $("#navbar").removeClass("scroll");
//     }
//   });
// });


window.onscroll = function() {
  var header = document.querySelector('header');
  if (window.pageYOffset > 100) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }
};

// window.addEventListener('scroll', function() {
//   var header = document.querySelector('header');
//   var scrolled = window.scrollY;

//   // Set the transparency value (0 to 1) that you want for the background
//   var targetOpacity = 0.8;

//   // Apply the fixed transparency value when scrolled
//   header.style.backgroundColor = `rgba(255, 255, 255, ${targetOpacity})`;
// });