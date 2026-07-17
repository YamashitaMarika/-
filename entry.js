const optionRadios = document.querySelectorAll('[data-entry-option]');
const optionInputs = document.querySelectorAll('[data-entry-input]');

function updateOptionInputs() {
  const selectedOption = document.querySelector('[data-entry-option]:checked')?.value;

  optionInputs.forEach((input) => {
    const isSelected = input.dataset.entryInput === selectedOption;
    input.disabled = !isSelected;
    input.required = isSelected;

    if (!isSelected) {
      input.value = '';
    }
  });
}

optionRadios.forEach((radio) => {
  radio.addEventListener('change', updateOptionInputs);
});

updateOptionInputs();
