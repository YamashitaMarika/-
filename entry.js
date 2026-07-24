const optionRadios = document.querySelectorAll('[data-entry-option]');
const entryPanels = document.querySelectorAll('[data-entry-panel]');

function updateEntryPanels() {
  const selectedOption = document.querySelector('[data-entry-option]:checked')?.value;

  entryPanels.forEach((panel) => {
    const isSelected = panel.dataset.entryPanel === selectedOption;
    panel.hidden = !isSelected;

    panel.querySelectorAll('input, select, textarea, button').forEach((control) => {
      const wasRequired = control.dataset.required === 'true' || control.required;

      if (wasRequired) {
        control.dataset.required = 'true';
      }

      control.disabled = !isSelected;
      control.required = isSelected && control.dataset.required === 'true';
    });
  });
}

optionRadios.forEach((radio) => {
  radio.addEventListener('change', updateEntryPanels);
});

updateEntryPanels();
