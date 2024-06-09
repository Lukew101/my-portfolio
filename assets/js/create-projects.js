import { projects } from "./data/projects-data.js";

const projectSwiperWrapper = document.querySelector(".swiper-wrapper");

const createProject = () => {
  let allProjectsHTML = "";

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    let technologyBadges = {
      react: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "next.js": "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
      typescript: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      spring: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
      postgresql: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
      wordpress: "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white",
      mongodb: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
      javascript: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      tailwind: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
      html: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      css: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    };

    let technologiesHTML = "";
    for (let technology of project.technologies) {
      let badge = technologyBadges[technology.toLowerCase()];
      technologiesHTML += `
      <img class="technology-badge" src="${badge}">
      `;
    }

    allProjectsHTML += `
       <div class="portfolio__content grid swiper-slide">
              <img
                src=${project.image}
                alt=${project.alt}
                class="portfolio__img"
              />

              <div class="portfolio__data">
                <h3 class="portfolio__title">${project.title}</h3>
                <p class="portfolio__description">
                  ${project.description}
                </p>
                <div>
                  <p class="portfolio__technologies-used--header">Technologies used:</p>
                  <div class="portfolio__technologies-used--badges">
                    ${technologiesHTML}
                  </div>
                </div>

                ${
                  project.website
                    ? `<a
                  href=${project.website}
                  class="button button--flex button--small portfolio__button"
                >
                  Website
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>`
                    : ""
                }
                <a
                  href=${project.code}
                  class="button button--flex button--small portfolio__button"
                >
                  Code
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
        `;
  }

  projectSwiperWrapper.innerHTML = allProjectsHTML;

  let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

createProject();
