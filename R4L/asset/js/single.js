const thumbSwiper = new Swiper(".thumbSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const MainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-single-next",
    prevEl: ".swiper-button-single-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});

const ShowMore = document.getElementById("show-more"),
  ShowMoreBtn = document.getElementById("show-more-btn");

ShowMoreBtn.addEventListener("click", () => {
  ShowMore.classList.add("visible");
  ShowMoreBtn.classList.add("hide");
});

// MixitUp query for the "shared & Exclsuive" filters
let mixerSingles = mixitup(".sliding__widget--container", {
  selectors: {
    target: ".sliding__widget--container-item",
  },
  animation: {
    duration: 450,
    effects: "fade translateY(1000px) reverse nudgeY(30px)",
  },
});

// Default Filter Single when page loads
mixerSingles.filter(".shared-single");

//Shared & Exclusive Buttons
const slidingFilterItem = document.querySelectorAll(
  ".sliding__widget--filter-item"
);

function activeLists() {
  slidingFilterItem.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

slidingFilterItem.forEach((l) => l.addEventListener("click", activeLists));

//Function to show sliderWidget when Clicking the startbooking button
const startBooking = document.getElementById("start__booking");
const sliderWidget = document.querySelector(".sliding__widget");
const closeBtn = document.getElementById("close-btn");

startBooking.addEventListener("click", () => {
  sliderWidget.classList.add("sliding__widget--active");
});

closeBtn.addEventListener("click", () => {
  sliderWidget.classList.remove("sliding__widget--active");
});

// CREATING ANIMATED CART BUTTON
const cartButtons = document.querySelectorAll(".room-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
  button.classList.add("disabled");
  setTimeout(() => {
    button.classList.remove("clicked");
    button.classList.remove("disabled");
  }, 3000);
}
