function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const targetValue = parseInt(counter.innerText);
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100000); // Увеличиваем значение на 1% от целевого значения каждый раз

    const counterInterval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(counterInterval);
      } else {
        currentValue += increment;
        counter.innerText = currentValue;
      }
    }, 50); // Задержка между увеличениями значения (в миллисекундах)
  });
}

animateCounters();

function typeEffect(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;
  let timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

let speed = 75;
let h1 = document.querySelector("h1");
let p = document.querySelectorAll("p");
let delay = h1.innerHTML.length * speed + speed;
typeEffect(h1, speed);
setTimeout(function () {
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);

// let speed2 = 75;
// let header = document.querySelector(".video-header");
// let para = document.querySelector(".video-text-1");
// let delay2 = header.innerHTML.length * speed + speed;
// typeEffect(header, speed);
// setTimeout(function () {
//   para.style.display = "inline-block";
//   typeEffect(para, speed);
// }, delay2);

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("selected-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
