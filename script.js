function analyseFood(){

let food=document.getElementById("foodInput").value.toLowerCase();
let result=document.getElementById("result");

let data={
"pizza":"High calorie fast food",
"burger":"High fat food",
"salad":"Healthy option",
"sushi":"Balanced meal",
"apple":"Healthy fruit"
};

if(data[food]){
result.innerHTML="<div class='card'>"+data[food]+"</div>";
}else{
result.innerHTML="Try pizza, salad or sushi";
}
}

function generateMeal(){

let meals=[
"Chicken + rice + vegetables",
"Fish + salad + fruit",
"Oats + banana + yoghurt"
];

let random=meals[Math.floor(Math.random()*meals.length)];

document.getElementById("mealResult").innerHTML=
"<div class='card'>"+random+"</div>";
}
