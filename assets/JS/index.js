// navbar menu
const navBarBtn = document.querySelector(".js-nav-btn");
const navBarModal = document.querySelector(".js-modal-nav");
const ModalClose = document.querySelector(".js-modal-close");

function showNavBarModal() {
  navBarModal.classList.add("open");
}

function hideNavBarModal() {
  navBarModal.classList.remove("open");
}

navBarBtn.addEventListener("click", showNavBarModal);

ModalClose.addEventListener("click", hideNavBarModal);

// intro video
const videoBtn = document.querySelector(".js-video-btn");
const videoModal = document.querySelector(".js-modal-video");
const videoClose = document.querySelector('.js-video-close')

function showVideo() {
  videoModal.classList.add("open");
}

function hideVideo() {
  videoModal.classList.remove("open");
}

videoBtn.addEventListener("click",showVideo);

videoClose.addEventListener("click", hideVideo);
