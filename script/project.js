//.................pagination-tabs click then go top of project page..............//

const paginationTabs = document.querySelectorAll(".pagination-tab");
// console.log(paginationTabs);

paginationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  });
});

//................tab-btn-color change.............//

let filterBtns = document.querySelectorAll(".filter-btn-box button");

filterBtns.forEach((button) => {
  button.addEventListener("click", () => {
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

//...................pagination tab active state............//

let uiPaginationTabs = document.querySelectorAll(
  "#project-uiux .pagination-tab"
);
uiPaginationTabs.forEach((tabs) => {
  tabs.addEventListener("click", () => {
    uiPaginationTabs.forEach((tab) => {
      tab.classList.remove("pagination-tab-active");
    });
    tabs.classList.add("pagination-tab-active");
  });
});

let projectAllPaginationTabs = document.querySelectorAll(
  "#project-all .pagination-tab"
);
// console.log(contentPaginationTabs);
projectAllPaginationTabs.forEach((tabs) => {
  tabs.addEventListener("click", () => {
    projectAllPaginationTabs.forEach((tab) => {
      tab.classList.remove("pagination-tab-active");
    });
    tabs.classList.add("pagination-tab-active");
  });
});

//...................video preload.......................//

document.addEventListener("DOMContentLoaded", () => {
  const videoSources = [
    "images/project/modal-video/video-1.mp4",
    "images/project/modal-video/video-2.mp4",
    "images/project/modal-video/video-3.mp4",
    "images/project/modal-video/video-4.mp4",
    "images/project/modal-video/video-5.mp4",
    "images/project/modal-video/video-6.mp4",
    "images/project/modal-video/video-7.mp4",
    "images/project/modal-video/video-8.mp4",
  ];

  // 2. Loop through the array
  videoSources.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.type = "video/mp4";
    link.href = src;

    document.head.appendChild(link);
  });
});
