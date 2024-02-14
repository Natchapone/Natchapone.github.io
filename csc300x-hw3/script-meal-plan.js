function addMeal(button) {
    const order = document.createElement("div");
    const item = button.previousElementSibling.textContent;
    const cost = button.parentElement.getAttribute("data-price");
    const selectedMeal = document.getElementById("selectedMeal");

    order.innerHTML = `${item} <span class="cost" hidden>${cost}</span>`;

    var removeBtn = document.createElement("button");
    removeBtn.textContent = 'Remove';

    removeBtn.onclick = function () {
        order.remove();
        calculateCost();
    }

    selectedMeal.appendChild(order);
    order.appendChild(removeBtn);

    calculateCost();

}

function calculateCost() {
    const prices = document.querySelectorAll("#selectedMeal .cost");
    let total = 0;
    prices.forEach((amount) => { total += parseFloat(amount.textContent); });
    document.getElementById("totalCost").textContent = total.toFixed(2);

}