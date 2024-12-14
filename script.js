console.log('Hello!');
// Question 1 - Choose a gender

const radioBtn = document.getElementsByName('gender');
const showResult = document.getElementById('showResult');
for (let i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener('change', () => {
    const selectedRadioButton = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    showResult.textContent = `Selected gender is ${selectedRadioButton}`;
  });
}

// Question 2 choose meal prefrenece
const meal = document.getElementsByName('meal');
const showResult2 = document.getElementById('showResult2');
for (let i = 0; i < meal.length; i++) {
  meal[i].addEventListener('change', () => {
    const mealRadioBtn = document.querySelector(
      'input[name="meal"]:checked'
    ).value;
    console.log(mealRadioBtn);
    showResult2.textContent = `Your Selected Meal is ${mealRadioBtn}`;
  });
}

// Question 3- choose a size
const size = document.getElementsByName('size');
const showResult3 = document.getElementById('showResult3');
for (let i = 0; i < size.length; i++) {
  size[i].addEventListener('change', () => {
    const sizeRadioBtn = document.querySelector(
      'input[name="size"]:checked'
    ).value;
    showResult3.textContent = `Your Size is ${sizeRadioBtn}`;
  });
}
