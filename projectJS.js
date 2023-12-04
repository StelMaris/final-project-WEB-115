function generateMealPlan() {
    var email = document.getElementById("email").value;
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var name = document.getElementById("name").value;
    var goal = document.getElementById("goal").value;
    var mealsM = {
        Breakfast: document.getElementById("breakfastM").value,
        Brunch: document.getElementById("snack1M").value,
        Lunch: document.getElementById("lunchM").value,
        Snack: document.getElementById("snack2M").value,
        Dinner: document.getElementById("dinnerM").value
    };
    var mealsTu = {
        Breakfast: document.getElementById("breakfastTu").value,
        Brunch: document.getElementById("snack1Tu").value,
        Lunch: document.getElementById("lunchTu").value,
        Snack: document.getElementById("snack2Tu").value,
        Dinner: document.getElementById("dinnerTu").value
    }
    var mealsW = {
        Breakfast: document.getElementById("breakfastW").value,
        Brunch: document.getElementById("snack1W").value,
        Lunch: document.getElementById("lunchW").value,
        Snack: document.getElementById("snack2W").value,
        Dinner: document.getElementById("dinnerW").value
    }
    var mealsTh = {
        Breakfast: document.getElementById("breakfastTh").value,
        Brunch: document.getElementById("snack1Th").value,
        Lunch: document.getElementById("lunchTh").value,
        Snack: document.getElementById("snack2Th").value,
        Dinner: document.getElementById("dinnerTh").value
    }
    var mealsF = {
        Breakfast: document.getElementById("breakfastF").value,
        Brunch: document.getElementById("snack1F").value,
        Lunch: document.getElementById("lunchF").value,
        Snack: document.getElementById("snack2F").value,
        Dinner: document.getElementById("dinnerF").value
    }
    var mealsSa = {
        Breakfast: document.getElementById("breakfastSa").value,
        Brunch: document.getElementById("snack1Sa").value,
        Lunch: document.getElementById("lunchSa").value,
        Snack: document.getElementById("snack2Sa").value,
        Dinner: document.getElementById("dinnerSa").value
    }
    var mealsSu = {
        Breakfast: document.getElementById("breakfastSu").value,
        Brunch: document.getElementById("snack1Su").value,
        Lunch: document.getElementById("lunchSu").value,
        Snack: document.getElementById("snack2Su").value,
        Dinner: document.getElementById("dinnerSu").value
    }

    // Create on-the-fly window
    var mealPlanWindow = window.open();
    mealPlanWindow.document.write("<html><head><title>Meal Plan for " + name + "</title><link rel='stylesheet' href='styles.css'>");
    mealPlanWindow.document.write("</head><body><div class='container'>");
    mealPlanWindow.document.write("<h1>Meal Plan for " + name + "</h1>");
    mealPlanWindow.document.write("<p><strong>Goal for the week:</strong> " + goal + "</p>");
    mealPlanWindow.document.write("<h2>Meal Plan</h2>");
    mealPlanWindow.document.write("<h3>Monday</h3>");
    
    for (var meal in mealsM) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsM[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Tuesday</h3>");
    
    for (var meal in mealsTu) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsTu[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Wednesday</h3>");
    
    for (var meal in mealsW) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsW[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Thursday</h3>");
    
    for (var meal in mealsTh) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsTh[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Friday</h3>");
    
    for (var meal in mealsTh) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsTh[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Saturday</h3>");
    
    for (var meal in mealsF) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsF[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Friday</h3>");
    
    for (var meal in mealsSa) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsSa[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<h3>Sunday</h3>");
    
    for (var meal in mealsSu) {
        mealPlanWindow.document.write("<p>" + meal + ": " + mealsSu[meal] + "</p>");
    }
    
    mealPlanWindow.document.write("<button onclick='window.print()'>Print/Download</button>");

    mealPlanWindow.document.write("</div></body></html>");
}
// Clear form
function clearMealPlan() {
    var form = document.getElementById("mealForm");
    form.reset();
}
// Validade Email
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

