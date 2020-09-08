export default class Intersection {
  constructor() {
    this.toAnimate = document.querySelectorAll(".to-animate");
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    this.toAnimate.forEach((item) => this.observer.observe(item));
  }
}
