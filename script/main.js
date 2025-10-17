let projectImg = document.querySelectorAll(".project-image");
let textBlocks = document.querySelectorAll(".text-block");

const imgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let dataImageId = entry.target.getAttribute("data-image");
      let image = document.getElementById(dataImageId);
      // console.log(image);

      if (entry.isIntersecting) {
        projectImg.forEach((img) => {
          img.classList.remove("active");
        });
        image.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

textBlocks.forEach((block) => {
  imgObserver.observe(block);
});

// when screen size is lees then 963 img scroll show
// if (window.innerWidth <= 963) {
//   let projectImgMob = document.querySelectorAll(".project-image-mob");
//   let textBlockMob = document.querySelectorAll(".text-block-mob");
//   let sectionProject = document.querySelector(".section-project");

//   const imgObserverMob = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         let dataImageId = entry.target.getAttribute("data-image");
//         let image = document.getElementById(dataImageId);

//         if (entry.isIntersecting) {
//           projectImgMob.forEach((img) => {
//             img.classList.remove("project-img-mob-active");
//           });
//           image.classList.add("project-img-mob-active");
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );
//   textBlockMob.forEach((block) => {
//     imgObserverMob.observe(block);
//   });
// }

//......................... galley slide images ..............................//

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".gallery-splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    rewind: true,
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    height: "100%",
    arrows: true,
    pagination: true,
    gap: "1rem",
    keyboard: "global",
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    drag: "free",
    autoScroll: {
      speed: 4,
      pauseOnHover: true,
    },
    breakpoints: {
      1024: {
        // Tablet
        perPage: 2,
        gap: "0.75rem",
      },
      768: {
        perPage: 1.8,
        gap: "0.5rem",
      },
      640: {
        perPage: 1,
        gap: "1rem",
      },
    },
  }).mount(window.splide.Extensions);
});

//....................skill section ..............//
document.addEventListener("DOMContentLoaded", function () {
  let skillBtn1 = document.querySelector("#skill-btn-1");
  let skillBtn2 = document.querySelector("#skill-btn-2");
  let skillBtn3 = document.querySelector("#skill-btn-3");
  let skillInfo = document.querySelector(".skill-info");
  let info = document.querySelector(".skill-info .info");

  const fillRect1 = document.getElementById("fill-rect-1");
  const fillRect2 = document.getElementById("fill-rect-2");
  const fillRect3 = document.getElementById("fill-rect-3");
  const fillRect4 = document.getElementById("fill-rect-4");

  // update the content when click on a button

  function updateDisplay(content) {
    skillInfo.innerHTML = content;
  }

  const content = {
    btn1: `
  <div class="info info-opacity fade">
  <p class="mb-3">Hey there, I’m Hriday — a budding web designer and developer passionate about creating sleek, user-friendly and responsive websites. I recently completed a Web Design and Development course at <span class="about-me-span">Moople Institute of Design and Animation</span>, where I honed my skills in building responsive and accessible digital experiences.</p>
<p>I stay active on LinkedIn and GitHub to share my work and learn from the community. Outside of coding, I enjoy <span class="about-me-span">watching Dr.Vivek Bindra videos on business</span>, <span class="about-me-span">physical activity</span> and <span class="about-me-span">exploring new places</span>, which keep me creative and energized.</p>
  </div>
  
  `,
    btn2: `
  <div class="info fade">
  <div class="info-grid-box">
            <div class="info-box-item info-box-1">
              <div class="heading">
                <h6>UI/UX Design</h6>
              </div>
              <div class="tools">
                <div class="tool-img">
                  <img src="images/icons/icon-1.png" alt="tool icons image">
                  <p>85%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-2.png" alt="tool icons image">
                  <p>75%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-3.png" alt="tool icons image">
                  <p>80%</p>
                </div>
              </div>
              <div class="tool-info">
                <p>Designing intuitive, user-friendly interfaces for seamless experiences</p>
              </div>
            </div>
            <div class="info-box-item info-box-2">
              <div class="heading">
                <h6>Front-End Development</h6>
              </div>
              <div class="tools">
                <div class="tool-img">
                  <img src="images/icons/icon-4.png" alt="tool icons image">
                  <p>95%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-5.png" alt="tool icons image">
                  <p>90%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-6.png" alt="tool icons image">
                  <p>80%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-7.png" alt="tool icons image">
                  <p>60%</p>
                </div>
              </div>
              <div class="tool-info">
                <p>Building responsive, dynamic websites with clean code</p>
              </div>
            </div>
            <div class="info-box-item info-box-3">
              <div class="heading">
                <h6>Frameworks & CMS</h6>
              </div>
              <div class="tools">
                <div class="tool-img">
                  <img src="images/icons/icon-8.png" alt="tool icons image">
                  <p>85%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-9.png" alt="tool icons image">
                  <p>75%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-10.png" alt="tool icons image">
                  <p>80%</p>
                </div>
              </div>
              <div class="tool-info">
                <p>Creating scalable, responsive websites using modern frameworks</p>
              </div>
            </div>
            <div class="info-box-item info-box-4">
              <div class="heading">
                <h6>Other Skills</h6>
              </div>
              <div class="tools">
                <div class="tool-img">
                  <img src="images/icons/icon-11.png" alt="tool icons image">
                  <p>85%</p>
                </div>
                <div class="tool-img">
                  <img src="images/icons/icon-12.png" alt="tool icons image">
                  <p>60%</p>
                </div>
              </div>
              <div class="tool-info">
                <p>Optimizing websites for search and dynamic functionality</p>
              </div>
            </div>
          </div>
  </div>
  `,
    btn3: `
  <div class="info fade">

<p class="my-goal-desc">As a passionate web designer and developer, I am dedicated to continuous upgrading my skills. I focus on mastering the skills needed to deliver projects that are visually appealing and very functional. 
</p>
<h6 class="mb-2 my-goal-list-heading">My main goals are:</h6>

<ul class="my-goal-lists">
  <li>
  <i class="ri-checkbox-circle-fill"></i>
    <span>To <span class="my-goal-inner-span">master website design</span> and create effective, user-friendly digital experiences.</span>
  </li>
  <li>
  <i class="ri-checkbox-circle-fill"></i>
    <span>To learn <span class="my-goal-inner-span">backend development</span> in order to build complete, functional websites from start to finish.</span>
  </li>
  <li>
  <i class="ri-checkbox-circle-fill"></i>
    <span>To <span class="my-goal-inner-span">improve my skills further</span> in front-end development.</span>
  </li>
  <li>
  <i class="ri-checkbox-circle-fill"></i>
  <span>To learn and use <span class="my-goal-inner-span">AI tools</span> to <span class="my-goal-inner-span">speed up development</span> and deliver smart, efficient solutions.</span>
  </li>
  <li>
  <i class="ri-checkbox-circle-fill"></i>
  <span>To design websites that not only <span class="my-goal-inner-span">look great</span> but also <span class="my-goal-inner-span">help people and businesses grow</span> through meaningful digital solutions.</span>
  </li>
</ul>
  </div>
 
  `,
  };

  updateDisplay(content.btn1);

  skillBtn1.addEventListener("click", function () {
    updateDisplay(content.btn1);
    document.querySelector(".info-opacity")?.classList.remove("info-opacity");
    setTimeout(() => {
      document.querySelector(".fade")?.classList.remove("fade");
    }, 500);
  });

  skillBtn2.addEventListener("click", function () {
    // animate from top down (increase height only)
    this.classList.remove("btn-outline");
    fillRect2.setAttribute("height", "54");
    updateDisplay(content.btn2);
    setTimeout(() => {
      document.querySelector(".fade")?.classList.remove("fade");
    }, 500);
  });
  skillBtn3.addEventListener("click", function () {
    // animate from top down (increase height only)
    this.classList.remove("btn-outline");
    fillRect3.setAttribute("height", "54");
    setTimeout(() => {
      fillRect4.setAttribute("height", "54");
    }, 500);
    updateDisplay(content.btn3);
    setTimeout(() => {
      document.querySelector(".fade")?.classList.remove("fade");
    }, 500);
  });

  //is intersecting observer use for btn 1

  let skillGridBox = document.querySelector(".skill-grid-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fillRect1.setAttribute("height", "54");
          setTimeout(() => {
            skillBtn1.classList.remove("btn-outline");
            document.querySelector(".info-opacity").style.opacity = 1;
          }, 1000);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(skillGridBox);
});

//....................project-splide............//

var splide = new Splide(".project-text-splide", {
  type: "slide",
  perPage: 1,
  focus: "center",
  rewind: true,
  autoplay: true,
  interval: 3500,
  pauseOnHover: false,
  height: "100%",
  arrows: true,
  pagination: true,
  gap: "1rem",
  keyboard: "global",
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
});

splide.mount();

//....................project-slide active .............//

const marquee = document.querySelector(".marquee-content");
let lastScrollTop = window.scrollY;
let position = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const delta = scrollTop - lastScrollTop;

  position += delta * 0.9; // adjust multiplier for speed
  marquee.style.transform = `translateX(${-position}px)`;

  lastScrollTop = scrollTop;
});
