// main.js
import { handleInput } from './js/commands.js';
import { inputEl, sendBtn } from './js/utils.js';

inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleInput();
});
sendBtn.addEventListener('click', handleInput);
