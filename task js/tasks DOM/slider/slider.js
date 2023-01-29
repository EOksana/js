const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const list = document.querySelector("#list");
const itemsLength = document.querySelectorAll(".slider__item").length

let currentRight = 0;

leftButton.addEventListener("click", event => {
    event.preventDefault();

    if (currentRight > 0) {
        currentRight -= 100;

        list.style.right = `${currentRight}px`;
    }
});

rightButton.addEventListener("click", event => {
    event.preventDefault();

    if (currentRight < (itemsLength - 3) * 100) {
        currentRight += 100;

        list.style.right = `${currentRight}px`;
    }
});