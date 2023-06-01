export default async function addClickEV(el) {
  el.addEventListener('click', convert);
}

function convert(e) {
  const tempSymbol = document.querySelectorAll('.temp-symbol-letter');
  const tempValue = document.querySelectorAll('.temp-value');

  if (e.target.checked) {
    toggleC(tempSymbol, tempValue);
    return;
  }
  toggleF(tempSymbol, tempValue);
}

function toggleC(tempSymbol, tempValue) {
  tempSymbol.forEach((el) => {
    el.textContent = 'F';
  });

  tempValue.forEach((el) => {
    el.textContent = (parseFloat(el.textContent) * (9 / 5) + 32).toFixed(1);
  });
}

function toggleF(tempSymbol, tempValue) {
  tempSymbol.forEach((el) => {
    el.textContent = 'C';
  });

  tempValue.forEach((el) => {
    el.textContent = (((parseFloat(el.textContent) - 32) * 5) / 9).toFixed(1);
  });
}
