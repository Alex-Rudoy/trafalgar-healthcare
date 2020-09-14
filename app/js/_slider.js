let testimonials = [
  {
    imgtop: "0px",
    imgleft: "0px",
    name: "Edward NewGate",
    title: "Founder Circle",
    text:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
  },
  {
    imgtop: "-133px",
    imgleft: "0px",
    name: "Marry Walker",
    title: "Business analyst",
    text:
      "“Thanks healthcare! I just can't get enough of healthcare. I want to get a T-Shirt with healthcare on it so I can show it off to everyone.”",
  },
  {
    imgtop: "0px",
    imgleft: "-133px",
    name: "John Smith",
    title: "Plant worker",
    text:
      "“Healthcare is the most valuable business resource we have EVER purchased. Healthcare has completely surpassed our expectations.”",
  },
  {
    imgtop: "-133px",
    imgleft: "-133px",
    name: "Lorry Ipsulko",
    title: "Strange figure",
    text:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam commodi perferendis neque incidunt ad tempora quibusdam ea deserunt omnis consequatur voluptate.”",
  },
];

export default class Intersection {
  constructor() {
    this.testimonial = document.querySelector(".testimonials__testimonial");
    this.img = document.querySelector(".testimonials__img");
    this.name = document.querySelector(".testimonials__name");
    this.title = document.querySelector(".testimonials__title");
    this.text = document.querySelector(".testimonials__text");
    this.leftArrow = document.querySelector(".testimonials__arrow");
    this.rightArrow = document.querySelector(".testimonials__arrow--right");
    this.controls = document.querySelectorAll(".testimonials__slider-step");
    this.current = 0;

    this.events();
    this.animateSlider();
  }

  events() {
    this.leftArrow.addEventListener("click", () => {
      this.current--;
      this.animateSlider();
    });

    this.rightArrow.addEventListener("click", () => {
      this.current++;
      this.animateSlider();
    });

    this.controls.forEach((elem) => {
      elem.addEventListener("click", () => {
        this.current = elem.dataset.step;
        this.animateSlider();
      });
    });
  }

  animateSlider() {
    if (this.current < 0) {
      this.current = 3;
    }
    this.current = this.current % 4;
    console.log(this.current);

    clearTimeout(this.fade);

    this.testimonial.classList.add("testimonials__testimonial--hidden");

    setTimeout(() => {
      this.img.style.top = testimonials[this.current].imgtop;
      this.img.style.left = testimonials[this.current].imgleft;
      this.name.innerHTML = testimonials[this.current].name;
      this.title.innerHTML = testimonials[this.current].title;
      this.text.innerHTML = testimonials[this.current].text;
      this.controls.forEach((elem) => {
        elem.classList.remove("testimonials__slider-step--active");
        if (elem.dataset.step == this.current) elem.classList.add("testimonials__slider-step--active");
      });
      console.log(this.img.style.top, this.img.style.left);
      this.testimonial.classList.remove("testimonials__testimonial--hidden");
    }, 700);

    this.fade = setTimeout(() => {
      this.current++;
      this.animateSlider();
    }, 6000);
  }
}
