import { skills } from "./data/skills-data.js";

const skillsGrid = document.querySelector(".skills__grid");

const createService = () => {
  let allSkillsHTML = "";

  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];

    let itemsHTML = "";
    for (let item of skill.skillItems) {
      itemsHTML += `
          <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">${item.name}</h3>
                    <span class="skills__number">${item.level}</span>
                  </div>
                  <div class="skills__bar">
                    <span class="skills__percentage" style="width: ${item.level};"></span>
                  </div>
                </div>
        `;
    }

    allSkillsHTML += `
       <div class="skills__content skills__close">
              <div class="skills__header">
                <i class="uil uil-brackets-curly skills__icon"></i>
                <div>
                  <h1 class="skills__title">${skill.title}</h1>
                  <span class="skills__subtitle"
                    >${skill.experience}</span
                  >
                </div>
                <i class="uil uil-angle-down skills__arrow"></i>
              </div>
              <div class="skills__list grid">
                ${itemsHTML}
              </div>
            </div>
      `;
  }
  skillsGrid.innerHTML = allSkillsHTML;

  const skillsContent = document.querySelectorAll(".skills__content");
  const skillsHeader = document.querySelectorAll(".skills__header");

  skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
  });

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
      this.parentNode.className = "skills__content skills__open";
    }
  }
};

createService();
