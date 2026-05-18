document.addEventListener("DOMContentLoaded", function () {

/* =========================
   FOOD DATABASE (SIMPLE AI)
========================= */

const foods = {
"apple": {
calories: 95,
protein: 0.5,
carbs: 25,
fat: 0.3,
rating: 9,
swap: "Try berries or orange for similar sweetness with more antioxidants"
},

"burger": {
calories: 550,
protein: 25,
carbs: 45,
fat: 30,
rating: 4,
swap: "Try grilled chicken wrap or homemade lean beef burger"
},

"chips": {
calories: 300,
protein: 3,
carbs: 35,
fat: 15,
rating: 3,
swap: "Try oven-baked sweet potato wedges"
},

"rice": {
calories: 200,
protein: 4,
carbs: 45,
fat: 1,
rating: 7,
swap: "Try brown rice for more fibre"
},

"pizza": {
calories: 285,
protein: 12,
carbs: 36,
fat: 10,
rating: 5,
swap: "Try homemade veggie pizza with wholemeal base"
},

"chicken": {
calories: 165,
protein: 31,
carbs: 0,
fat: 3.6,
rating: 9,
swap: "Keep as is or grill instead of frying"
},

"salad": {
calories: 120,
protein: 3,
carbs: 10,
fat: 8,
rating: 10,
swap: "Already healthy — add olive oil or lean protein"
}

};

/* =========================
   FOOD ANALYSIS FUNCTION
========================= */

window.analyseFood = function () {

const input = document.getElementById("foodInput");
const resultBox = document.getElementById("resultBox");

if (!input || !resultBox) return;

let food = input.value.toLowerCase().trim();

if (!foods[food]) {
resultBox.innerHTML = `
<h3>Food not found</h3>
<p>Try: apple, burger, chips, rice, pizza, chicken, salad</p>
`;
return;
}

let data = foods[food];

resultBox.innerHTML = `
<h2>${food.toUpperCase()}</h2>

<div class="result-grid">

<div class="card">🔥 Calories: ${data.calories}</div>
<div class="card">💪 Protein: ${data.protein}g</div>
<div class="card">🍞 Carbs: ${data.carbs}g</div>
<div class="card">🧈 Fat: ${data.fat}g</div>

</div>

<h3>Health Rating: ${data.rating}/10</h3>

<div class="rating-bar">
<div class="fill" style="width:${data.rating * 10}%"></div>
</div>

<p class="swap">
<strong>Healthier Swap:</strong> ${data.swap}
</p>
`;

};

/* =========================
   MEAL PLAN GENERATOR
========================= */

window.generateMeal = function () {

const meals = [
"Grilled chicken + brown rice + salad",
"Oatmeal with banana & honey",
"Veggie wrap with hummus",
"Salmon with sweet potato",
"Greek yoghurt with berries",
"Eggs with wholegrain toast"
];

const output = document.getElementById("mealOutput");

if (!output) return;

const random = meals[Math.floor(Math.random() * meals.length)];

output.innerHTML = `
<h3>Your Meal Idea:</h3>
<p>${random}</p>
`;

};

/* =========================
   SIMPLE ANIMATION EFFECTS
========================= */

const cards = document.querySelectorAll(".feature-card, .quick-card");

cards.forEach(card => {
card.addEventListener("mouseover", () => {
card.style.transform = "scale(1.03)";
});

card.addEventListener("mouseout", () => {
card.style.transform = "scale(1)";
});
});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});
});

});
