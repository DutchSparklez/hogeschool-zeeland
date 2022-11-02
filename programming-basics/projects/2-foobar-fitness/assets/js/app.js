// Wait for the window to be loaded in correctly
window.addEventListener('load', function () {
  // Get elements that are used multiple times throughout the script
  const adviceCard = document.getElementById('advice-card');
  const adviceText = document.getElementById('advice-text');

  // Prompt the user for their name and age; change the DOM elements
  const userName = window.prompt('What\'s your name?', 'Kees');
  document.getElementById('username').innerHTML = userName;
  const userAge = window.prompt('How old are you?', '46');
  document.getElementById('age').innerHTML = userAge;

  // Check if the user is older than 18
  if (18 < userAge) {
    // Get the user's height and weight; change the DOM elements
    const userHeight = window.prompt('How tall are you?', '1.67');
    document.getElementById('height').innerHTML = userHeight;
    const userWeight = window.prompt('How much do you weigh?', '68');
    document.getElementById('weight').innerHTML = userWeight;

    // Calulate the BMI; create variables for someone who is under weight
    const bmi = userWeight / (userHeight ** 2);
    let classification = 'You are under weight';
    let advice = 'Start with a personal trainer';
    let className = 'box has-background-warning';

    // Determine whether the variables have to be changed depending on the BMI
    if (18.5 <= bmi && bmi < 25) {
      classification = 'You have a normal weight';
      advice = 'Start with any programme';
      className = 'box has-background-success';
    } else if (25 <= bmi && bmi < 30) {
      classification = 'You are slightly over weight';
      advice = 'Start with cardio training';
    } else if (30 <= bmi) {
      classification = 'You are obese';
      className = 'box has-background-danger';
    }

    // Change the visuals
    adviceCard.classList = className;
    adviceText.innerHTML = `Your BMI is: ${bmi}<br>${classification}<br>${advice}`;
  } else {
    // Display the youngling a waring
    adviceCard.className = 'box has-background-grey-light';
    adviceText.innerHTML = `Sorry ${userName}, you are not old enough to get a proper advice from us`;
  }
});