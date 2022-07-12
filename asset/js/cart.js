const swiperFeatured = new Swiper(".featured__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      const calendlyWidget = document.querySelector(".calendly-badge-widget");
      modalContainer.classList.add("show-modal");
      calendlyWidget.classList.remove("remove-widget");
    });
  }
};
showModal("open-modal", "modal-container");

/*=============== close MODAL ===============*/
const closeBtn = document.querySelector(".close-modal");

function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  const calendlyWidget = document.querySelector(".calendly-badge-widget");
  modalContainer.classList.remove("show-modal");
  calendlyWidget.classList.add("remove-widget");
}
closeBtn.addEventListener("click", closeModal);
