//..................content load............//
let mains = document.querySelectorAll("main");

window.onload = function () {
  mains.forEach((main) => {
    main.style.opacity = "1";
    main.style.visibility = "visible";
  });
};

//..............header scroll event..................//

let headers = document.querySelectorAll("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  // console.log(currentScroll);
  headers.forEach((header) => {
    if (currentScroll > lastScroll) {
      header.classList.add("hidden");
      header.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
    } else if (currentScroll === 0) {
      header.classList.remove("hidden");
      header.style.backgroundColor = "transparent";
      header.style.backdropFilter = "blur(0px)";
    } else {
      header.classList.remove("hidden");
      header.style.backgroundColor = "transparent";
      header.style.backdropFilter = "blur(12px)";
    }
  });

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

//....................mob nav menu bar slide......................//

let hamburgers = document.querySelectorAll(".hamburger");
let offcanvasRights = document.querySelectorAll(".offcanvas-right");
const bodies = document.querySelectorAll("body");

hamburgers.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    offcanvasRights.forEach((offcanvasRight) => {
      offcanvasRight.classList.toggle("offcanvas-width-toggle");
    });
    bodies.forEach((body) => {
      body.classList.toggle("overflow");
    });
  });
});
//.............header nav click then offcanvas box gone..........//
let mobNavLInks = document.querySelectorAll(".mob-nav li a");
let menuToggle = document.getElementById("menu-toggle");

mobNavLInks.forEach((link) => {
  link.addEventListener("click", () => {
    offcanvasRights.forEach((offcanvasRight) => {
      offcanvasRight.classList.toggle("offcanvas-width-toggle");
    });
    bodies.forEach((body) => {
      body.classList.remove("overflow");
    });
    menuToggle.checked = false;
  });
});

//.............mob nav lets talk button click then offcanvas remove......//
let mobContactBtns = document.querySelectorAll(".mob-contact-btn > button");

mobContactBtns.forEach((btns) => {
  btns.addEventListener("click", () => {
    offcanvasRights.forEach((offcanvasRight) => {
      offcanvasRight.classList.toggle("offcanvas-width-toggle");
    });
    bodies.forEach((body) => {
      body.classList.remove("overflow");
    });
    menuToggle.checked = false;
  });
});

//......................btn shake...................//
const shakeBtns = document.querySelectorAll("header .btn-style");
// console.log(btn);

shakeBtns.forEach((btn) => {
  function toggleShake() {
    btn.classList.add("animate");

    setTimeout(() => {
      btn.classList.remove("animate");
    }, 3000);

    setTimeout(toggleShake, 4500);
  }

  toggleShake();
});

//..................nav li active color ..............//
let navLi = document.querySelectorAll("header .desktop-nav a");
// console.log(navLI);
navLi.forEach((li) => {
  li.addEventListener("click", function () {
    navLi.forEach((item) => {
      item.classList.remove("navLi-active");
    });
    li.classList.add("navLi-active");
  });
});

//..............................footer................................//

let year = document.querySelector(" footer .btm-row p span");
// console.log(year.textContent);
year.textContent = new Date().getFullYear();

// ..............................footer words.....................//

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".footer-note").forEach((footerNote) => {
    let text = footerNote.innerText.trim();
    if (!text) return;

    footerNote.textContent = "";

    // Split text into words
    let words = text.split(/\s+/);

    words.forEach((w) => {
      let wordSpan = document.createElement("span");
      wordSpan.className = "word";

      for (let letter of w) {
        let letterSpan = document.createElement("span");
        letterSpan.textContent = letter;
        letterSpan.className = "letter";
        wordSpan.appendChild(letterSpan);
      }

      footerNote.appendChild(wordSpan);
    });

    // Change color of specific words (index 15–19)
    footerNote.querySelectorAll(".word").forEach((word, index) => {
      if (index >= 15 && index <= 19) {
        word.style.color = "#27dfb3";
      }
    });
  });
});

//..............................back to top.........................//

let backToTopBtns = document.querySelectorAll(".back-to-top");

backToTopBtns.forEach((btn) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//........................form validation section.......................//

let validationIcon = document.querySelector(".validation-icon");

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const nameInput = form.querySelector(".form-name");
  const emailInput = form.querySelector(".form-email");
  const messageInput = form.querySelector(".form-message");
  const nameError = form.querySelector(".name-error");
  const emailError = form.querySelector(".email-error");

  let isValid = true;

  // Reset previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageInput.style.border = "1px solid #ccc";

  // Validate Name
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Full name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === "") {
    messageInput.style.border = "1px solid red";
    isValid = false;
  }

  // If validation passes, submit the form
  if (isValid) {
    form.submit();
  }
}

//...................get in touch modal active..........//

let getInTouchBtn = document.querySelectorAll(".get-in-touch-btn");

let modalMainBox = document.querySelector(".get-in-touch-modal-box");
let modalClose = document.querySelector(".modal-close");
let body = document.querySelector("body");

getInTouchBtn.forEach((button) => {
  button.addEventListener("click", () => {
    modalMainBox.classList.add("modal-entry-active");
    body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modalMainBox.classList.remove("modal-entry-active");
  setTimeout(() => {
    body.style.overflow = "auto";
  }, 400);
});

modalMainBox.addEventListener("click", (event) => {
  if (event.target === modalMainBox) {
    modalMainBox.classList.remove("modal-entry-active");
    body.style.overflow = "auto";
  }
});

//.......................scroll reveal.................//
const sr = ScrollReveal({
  duration: 1500,
  distance: "100px",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  opacity: 1,
  scale: 1,
  viewFactor: 0.15,
  reset: false,
  mobile: true,
});

sr.reveal(".hero-text h1", {
  origin: "bottom",
  // scale: 2,
  delay: 300,
});
sr.reveal(".hero-text p", {
  origin: "bottom",
  opacity: 0,
  delay: 600,
});
sr.reveal(".hero-btn", {
  origin: "bottom",
  // scale: 2,
  distance: "200px",
  delay: 1200,
  interval: 200,
});

sr.reveal(".hero-img", {
  origin: "center",
  delay: 400,
});
sr.reveal(".section-heading h2", {
  origin: "bottom",
  opacity: 1,
  delay: 400,
});
sr.reveal(".skill-accordion-1", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".skill-accordion-2", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".skill-accordion-3", {
  origin: "bottom",
  delay: 300,
});

//for mob delay set
// const isMobile = window.innerWidth <= 768;
// const delay1 = 300;
// const delay2 = isMobile ? 300 : 500;
// const delay3 = isMobile ? 300 : 700;

sr.reveal(".service-cards-grid-box .card-1", {
  origin: "bottom",
  delay: 300,
  distance: "150px",
});
sr.reveal(".service-cards-grid-box .card-2", {
  origin: "bottom",
  delay: 500,
  distance: "150px",
});
sr.reveal(".service-cards-grid-box .card-3", {
  origin: "bottom",
  delay: 700,
  distance: "150px",
});
//end
// sr.reveal(".form-grid-box .left-col-info", {
//   origin: "left",
//   delay: 300,
// });
// sr.reveal(".form-grid-box .right-col-form", {
//   origin: "right",
//   delay: 300,
// });
sr.reveal(".gallery-btn", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".footer-note", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".footer-btn", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".resume-btn", {
  origin: "bottom",
  opacity: 1,
  delay: 300,
});
sr.reveal(".footer-btm-slide-up", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".project-hero-text-1", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".project-hero-text-2", {
  origin: "bottom",
  delay: 500,
});
sr.reveal(".motto-flex-box p", {
  origin: "bottom",
  delay: 700,
});

//....................project-modal open.................//

const modal = document.getElementById("myModal");

const modalVideo = document.getElementById("modalVideo");
const videoSource = modalVideo.querySelector("source");

const modalPrototypeBtn = document.querySelector(".modal-prototype-btn");
const modalPrototypeBtnHref = modalPrototypeBtn.getAttribute("href");

const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".open-modal");

// for showing video on modal
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const videoSrc = this.getAttribute("data-video");
    videoSource.src = videoSrc;
    modalVideo.load();
    const prototypeLink = this.getAttribute("data-prototype");
    modalPrototypeBtn.setAttribute("href", prototypeLink);

    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
  });
});

//for prototype link btn in modal

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.classList.add("closing");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
    modalVideo.pause();
  }, 300);
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("closing");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("closing");
      modalVideo.pause();
    }, 300);
  }
});
