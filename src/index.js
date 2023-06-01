import './css/normalize.css';
import './css/style.css';
import './css/grad.css';
import { getData } from './modules/handleAPI';
import { createDOM, createError } from './modules/handleDOM';
import addClickEV from './modules/handleTempToggle';

const btnSearchLocation = document.querySelector('.btn-search');
export const txtSearchLocation = document.querySelector('#txt-search');
export const mainContentEl = document.querySelector('.main-content');

btnSearchLocation.addEventListener('click', async () => {
  await validateData(txtSearchLocation.value);
});

txtSearchLocation.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    await validateData(txtSearchLocation.value);
  }
});

async function validateData(query) {
  // show loading animation
  mainContentEl.innerHTML = '<div class="loading"></div>';

  // check query for symbols
  if (query.match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g)) {
    mainContentEl.innerHTML = await createError('Error: Query contains symbols');
    return;
  }

  // append content to dom
  mainContentEl.innerHTML = await createDOM(await getData(query));

  // add event listener to temp toggle
  await addClickEV(document.querySelector('#temp-toggle'));

  // clear input
  txtSearchLocation.value = '';
}
