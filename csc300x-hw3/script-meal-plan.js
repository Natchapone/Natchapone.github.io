function addMeal(button) {
    const order = document.createElement("div");
    const item = button.previousElementSibling.textContent;
    const cost = button.parentElement.getAttribute("data-price");
    const selectedMeal = document.getElementById("selectedMeal");

    order.innerHTML = `${item} <button onclick="removeOrder(this, ${cost})">Remove</button> 
    <span class="cost" hidden>${cost}</span>`;

    selectedMeal.appendChild(order);
    Calculate();
}

function removeOrder(button) {
    const dishElement = button.parentElement;
    dishElement.remove();
    Calculate();
}

function Calculate() {
    const prices = document.querySelectorAll("#selectedMeal .cost");
    let total = 0;
    prices.forEach((amount) => { total += parseFloat(amount.textContent); });
    document.getElementById("totalCost").textContent = total.toFixed(2);
}
