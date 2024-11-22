// cgange bg on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
});

// open faqs paragrph 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector(".faq-icon i");
        if(icon.className === 'plus') {
            icon.className = 'minus'
        } else {
             icon.className = 'plus';
        }
    });
});
// sleder
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 2
        },
      },
    });

// nav mobile

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex"
  closeBtn.style.display = "inline-block"
  menuBtn.style.display = "none"
});

// close nav

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}


closeBtn.addEventListener('click', closeNav)