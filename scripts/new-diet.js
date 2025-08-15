const questions = [{
  id: 0,
  question_html: `
    <p>How many protein grams?</p>
    <input type="text" class="js-input_0">
    <button class="next-button js-next-button" data-question-id="0">Next</button>
  `
}, {
  id: 1,
  question_html: `
    <p>How many carbs grams?</p>
    <input type="text" class="js-input_1">
    <button class="next-button js-next-button" data-question-id="1">Next</button>
  `
}, {
  id: 2,
  question_html: `
    <p>How many fat grams?</p>
    <input type="text" class="js-input_2">
    <button class="submit-button js-submit-button" data-question-id="2">Submit</button>
  `
}];

const answers = [{
  id: 0,
  protein: null,
  value: 0
}, {
  id: 1,
  carbs: null,
  value: 0
}, {
  id: 2,
  fats: null,
  value: 0
}];

let current_question_id = 0;

function render_form() {
  let current_question = questions
    .find(question => {
      return question.id === current_question_id;
    });

  const diet_form = document.querySelector('.js-new-diet-form');

  diet_form.innerHTML = current_question.question_html;

  // Attach listeners after rendering
  const next_button = diet_form.querySelector('.js-next-button');
  const submit_button = diet_form.querySelector('.js-submit-button');

  if (next_button) {
    next_button.addEventListener('click', function () {
      const question_id = parseInt(this.dataset.questionId);
      const input_value = diet_form.querySelector(`.js-input_${question_id}`).value;

      answers.forEach(function (element) {
        if (element.id === question_id) {
          element.value = input_value;
          console.log('value updated', answers);
        }
      });

      current_question_id++;
      render_form();
    });
  }

  if (submit_button) {
    submit_button.addEventListener('click', function () {
      const question_id = parseInt(this.dataset.questionId);
      const input_value = diet_form.querySelector(`.js-input_${question_id}`).value;

      answers.forEach(function (element) {
        if (element.id === question_id) {
          element.value = input_value;
          console.log('final value updated', answers);
        }
      });

      render_message();
      console.log('Form submitted', answers);
    });
  }
}

function render_message() {
  html = `
  <div class="thanks-form-message">
      <h2>Thank you!</h2>
      <p>Your plan is now complete</p>
      <a href="my-diet.html">
        <button>
          Go to my plan
        </button>
      </a>
    </div>
  `
  const diet_form = document.querySelector('.new_diet');

  diet_form.innerHTML = html;
}


// Initial render
render_form();
