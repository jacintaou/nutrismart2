const foods = {
  "Big Mac": {cal:550, pro:25, carb:45, fat:30},
  "Fries": {cal:365, pro:4, carb:48, fat:17},
  "Chicken Burger": {cal:420, pro:28, carb:40, fat:18},
  "Pizza": {cal:285, pro:12, carb:36, fat:10},
  "Salad": {cal:180, pro:10, carb:8, fat:12},
  "Protein Shake": {cal:250, pro:25, carb:20, fat:6}
};

let total = {cal:0, pro:0, carb:0, fat:0};

function analyse(food) {
  let d = foods[food];
  return `
    <div class="card">
      <h3>${food}</h3>
      <p>Calories: ${d.cal}</p>
      <p>Protein: ${d.pro}g</p>
      <p>Carbs: ${d.carb}g</p>
      <p>Fat: ${d.fat}g</p>
      <p><b>Health Score:</b> ${Math.max(1,10 - Math.floor(d.cal/100))}/10</p>
    </div>
  `;
}

function add(food) {
  let d = foods[food];
  total.cal += d.cal;
  total.pro += d.pro;
  total.carb += d.carb;
  total.fat += d.fat;

  document.getElementById("cal").innerText = total.cal;
  document.getElementById("pro").innerText = total.pro;
  document.getElementById("carb").innerText = total.carb;
  document.getElementById("fat").innerText = total.fat;

  document.getElementById("calBar").style.width = (total.cal/2000)*100 + "%";
  document.getElementById("proBar").style.width = (total.pro/120)*100 + "%";
}
