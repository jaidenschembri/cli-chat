// main.js
import { handleInput } from './js/commands.js';
import { inputEl, sendBtn, runBootSequence, loadSavedTheme } from './js/utils.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Load saved theme first (so boot sequence uses correct colors)
  loadSavedTheme();
  
  // Run boot sequence
  await runBootSequence();
  
  // Set up event listeners
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleInput();
  });
  sendBtn.addEventListener('click', handleInput);
});