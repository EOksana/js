const counterInput = document.querySelector(".quantity-selector");
const container = document.querySelector(".blocks");
const colorInput = document.querySelector(".color-selector");



let elementCounter = 0;
let isEven = false;



const addBlock = (num) => {
    const newBlock = document.createElement("div");

    newBlock.classList.add("item");
    newBlock.innerText = num;
    container.appendChild(newBlock);
    elementCounter = elementCounter + 1;
}

const removeBlock = () => {
    const items = document.querySelectorAll(".item");
    const lastElement = items[items.length - 1];

    container.removeChild(lastElement);
    elementCounter = elementCounter - 1;
};

const paintBlocks = (color, needPaintEven) => {
    const items = document.querySelectorAll(".item");

    items.forEach((block, index) => {
        const isIndexEven = !(index % 2)

        if (isIndexEven !== needPaintEven) {
            block.style.background = color;
        } else {
            block.style.background = "transparent";
        }
    })
}

counterInput.addEventListener("change", event => {
    const inputValue = event.target.valueAsNumber;

    if (elementCounter < inputValue) {
        addBlock(inputValue);
    }

    if (elementCounter > inputValue) {
        removeBlock();
    }
});


colorInput.addEventListener("change", event => {
    const currentColor = event.target.value;
    paintBlocks(currentColor, isEven);


    isEven = !isEven;
});