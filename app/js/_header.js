export default class Header {
  constructor() {
    this.sections = document.querySelectorAll("section");
    this.headerNav = document.querySelectorAll(".header a");
    console.log(this.headerNav);

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.calcSection(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    this.sections.forEach((section) => this.observer.observe(section));
  }

  calcSection(section) {
    this.headerNav.forEach((link) => {
      link.classList.remove("active");
      console.log(section);
      console.log(section.dataset.headerLink);
      document.querySelector(section.dataset.headerLink).classList.add("active");
    });
  }
}
