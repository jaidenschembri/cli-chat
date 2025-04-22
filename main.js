// main.js
import { handleInput } from './js/commands.js';
import { inputEl, sendBtn } from './js/utils.js';
import { loadSavedTheme } from './js/utils.js';
loadSavedTheme();


inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleInput();
});
sendBtn.addEventListener('click', handleInput);
