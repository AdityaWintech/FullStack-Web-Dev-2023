const displayValue = document.getElementById("value");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("clear")


// for decrement click
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value > 0) {
        displayValue.innerText = value-1;
    }
    else {
        alert("Negative value not allowed");
    }
});

// for increment click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value >= 10) {
        alert("10+ values are not allowed");
    }
    else {
        displayValue.innerText = value+1;
    }
});

// for reset click
resetBtn.addEventListener("click", () => {
    displayValue.innerHTML = 0;
})
