/* =====================================================
   NUTRISMART - MASTER SCRIPT (ALL PAGES)
   ===================================================== */

/* =========================
   FOOD DATABASE
========================= */

const foods = {
  Apple: {cal: 95, sugar: 19, fat: 0.3},
  Banana: {cal: 105, sugar: 14, fat: 0.4},
  Burger: {cal: 550, sugar: 9, fat: 30},
  Pizza: {cal: 285, sugar: 5, fat: 12},
  Fries: {cal: 365, sugar: 0, fat: 17},
  Sushi: {cal: 200, sugar: 3, fat: 4},
  Yogurt: {cal: 150, sugar: 12, fat: 4},
  Salad: {cal: 120, sugar: 4, fat: 5},
  Chocolate: {cal: 230, sugar: 25, fat: 13},
  IceCream: {cal: 270, sugar: 28, fat: 14}
};

/* =========================
   FOOD ANALYSIS SYSTEM
========================= */

function analyseFood() {
  const food = document.getElementById("foodSelect").value;
  const data = foods[food];

  // improved scoring algorithm
  let score = 10 - Math.floor((data.cal + data.sugar * 2 + data.fat * 10) / 120);
  if (score < 1) score = 1;

  let recommendation =
    score < 6
      ? "⚠ Health risk detected. Suggested swap: Salad, Yogurt, or Fruit."
      : "✅ Balanced nutritional choice.";

  document.getElementById("result").innerHTML = `
    <div class="card">
      <h3>🍽 ${food}</h3>
      <p>Calories: ${data.cal}</p>
      <p>Sugar: ${data.sugar}g</p>
      <p>Fat: ${data.fat}g</p>
      <p>Health Score: <span class="${score > 6 ? "good" : "bad"}">${score}/10</span></p>
      <p>${recommendation}</p>
    </div>
  `;
}

/* =========================
   CATEGORY POPUP SYSTEM
========================= */

function showCategory(type) {
  let text = "";

  switch (type) {
    case "fastfood":
      text = "🍔 Fast food is energy-dense but low in nutrients. Frequent consumption increases health risks.";
      break;
    case "healthy":
      text = "🥗 Healthy meals improve focus, energy levels, and long-term wellbeing.";
      break;
    case "snacks":
      text = "🍫 Snacks are often high in sugar and should be consumed in moderation.";
      break;
    case "drinks":
      text = "🥤 Sugary drinks contribute to hidden calorie intake and weight gain.";
      break;
  }

  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");

  modalText.innerHTML = `<h2>${text}</h2>`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* =========================
   MEAL PLANNER SCORING
========================= */

function generateMealScore() {
  return Math.floor(Math.random() * 4) + 6;
}

/* (optional helper if you expand meal planner later) */
function evaluateMeal(breakfast, lunch, dinner, snack) {
  let score = generateMealScore();

  let message =
    score > 7
      ? "Excellent balanced daily nutrition."
      : "Try adding more whole foods and reducing processed items.";

  return { score, message };
}

/* =========================
   DASHBOARD VISUAL HELPERS
========================= */

function createBar(value, color) {
  return `
    <div class="bar" style="width:${value}%; background:${color};"></div>
  `;
}

/* =========================
   CONTACT FORM FEEDBACK
========================= */

function submitForm() {
  const msg = document.getElementById("responseMessage");

  msg.innerHTML = "✅ Submission received. Our system will process your enquiry shortly.";

  setTimeout(() => {
    msg.innerHTML = "📩 Status: Awaiting review by NutriSmart support system.";
  }, 2000);
}

/* =========================
   PAGE LOAD ANIMATION BOOST
========================= */

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
