import { services } from "./data/services-data.js";

const servicesContainer = document.querySelector(".services__container");

const createService = () => {
  let allServicesHTML = "";

  for (let i = 0; i < services.length; i++) {
    const service = services[i];

    let itemsHTML = "";
    for (let item of service.items) {
      itemsHTML += `
          <li class="services__modal-service">
            <i class="uil uil-check-circle services__modal-icon"></i>
            <p>${item}</p>
          </li>
        `;
    }

    allServicesHTML += `
        <div class="services__content">
          <div>
            <i class="uil uil-brackets-curly services__icon"></i>
            <h3 class="services__title">${service.title}</h3>
          </div>

          <span
            class="button button--flex button--small button--link services__button"
          >
            View more
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <h4 class="services__modal-title">${service.title}</h4>
              <i class="uil uil-times services__modal-close"></i>
              <ul class="services__modal-services grid">
                ${itemsHTML}
              </ul>
            </div>
          </div>
        </div>
      `;
  }

  servicesContainer.innerHTML = allServicesHTML;

  const modalViews = document.querySelectorAll(".services__modal");
  const modalBtns = document.querySelectorAll(".services__button");
  const modalCloses = document.querySelectorAll(".services__modal-close");

  let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
  };

  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      modal(i);
    });
  });

  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove("active-modal");
      });
    });
  });
};

createService();
