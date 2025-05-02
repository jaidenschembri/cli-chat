// main.js
import { handleInput } from './js/commands.js';
import { inputEl, sendBtn, runBootSequence} from './js/utils.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#00ffcc'; // <-- sets default text color

  await runBootSequence();

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleInput();
  });
  sendBtn.addEventListener('click', handleInput);
});

