import { projects } from "./data/projects-data.js";

const projectSwiperWrapper = document.querySelector(".swiper-wrapper");

const createProject = () => {
  let allProjectsHTML = "";

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

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
                ${project.website ? `<a
                  href=${project.website}
                  class="button button--flex button--small portfolio__button"
                >
                  Website
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>` : ''}
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
