const stepsBtn = document.getElementById('stepsBtn');
const ingredientsBtn = document.getElementById('ingredientsBtn');
const steps = document.getElementById('steps');
const ingredients = document.getElementById('ingredients');
const stepItems = steps.querySelectorAll('ol li');
const progress = document.getElementById('progress');

let stepIndex = 0;
let autoStepInterval;

stepsBtn.addEventListener('click', () => {
  if (steps.style.display === 'none' || steps.style.display === '') {
    steps.style.display = 'block';
    ingredients.style.display = 'none';

    stepIndex = 0;
    showNextStep();

    clearInterval(autoStepInterval);
    autoStepInterval = setInterval(showNextStep, 3000);
  } else {
    steps.style.display = 'none';
    clearInterval(autoStepInterval);
  }
});

ingredientsBtn.addEventListener('click', () => {
  ingredients.style.display = 'block';
  steps.style.display = 'none';
  clearInterval(autoStepInterval);
});

function showNextStep() {
  stepItems.forEach(item => item.classList.remove('active'));

  if (stepIndex < stepItems.length) {
    stepItems[stepIndex].classList.add('active');

    let percent = ((stepIndex + 1) / stepItems.length) * 100;
    progress.style.width = percent + '%';

    stepIndex++;
  } else {
    clearInterval(autoStepInterval); 
  }
}
