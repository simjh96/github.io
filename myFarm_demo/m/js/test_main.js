var swiper01 = new Swiper(".myItems .swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
});

var swiper02 = new Swiper(".options .swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
});

var swiper02 = new Swiper(".neighbors .swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
});

$(".hamburger").on("click", function () {
  $(".settings").toggleClass("hide");
  $(".hamburger").toggleClass("on");
  $(".slider_menu").toggleClass("on");
});

$(".settings").on("click", function () {
  $(".hamburger").toggleClass("hide");
  $(".settings").toggleClass("on");
  $(".slider_menu").toggleClass("on");
});
