import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';
import doom from 'figlet/importable-fonts/Doom.js';
import slant from 'figlet/importable-fonts/Slant.js';
import cyberlarge from 'figlet/importable-fonts/Cyberlarge.js';

// Register figlet fonts
figlet.parseFont('Standard', standard);
figlet.parseFont('Doom', doom);
figlet.parseFont('Slant', slant);
figlet.parseFont('Cyberlarge', cyberlarge);

let isBooting = false;

// Constants
const COLORS = {
  primary: '#00ffcc',
  secondary: '#333',
  background: '#0a0a0a',
  error: '#ff0000'
};

const SOUNDS = {
  send: 'sfx-send',
  glitch: 'sfx-glitch',
  melville: 'sfx-melville',
  tarotOpen: 'sfx-tarot-open',
  tarotDraw: 'sfx-tarot-draw'
};

// DOM Elements
const inputEl = document.getElementById('terminal-input');
const outputEl = document.getElementById('output');
const sendBtn = document.getElementById('send-btn');
const sendSound = document.getElementById(SOUNDS.send);
const glitchSound = document.getElementById(SOUNDS.glitch);
const melvilleSound = document.getElementById(SOUNDS.melville);
const tarotOpenSound = document.getElementById(SOUNDS.tarotOpen);
const tarotDrawSound = document.getElementById(SOUNDS.tarotDraw);

// Utility Functions
function print(text, color = COLORS.primary) {
  const span = document.createElement('span');
  span.style.color = color;
  span.textContent = text + '\n';
  outputEl.appendChild(span);
  scrollToBottom();
}

function glitchify(text) {
  const chars = ['̷', '͟', '͜', '̶', '͡', '͠', '͢', '̸', '⸸', '⚠', '⛧'];
  return text.split('').map(char => {
    if (Math.random() < 0.1) return chars[Math.floor(Math.random() * chars.length)] + char;
    if (Math.random() < 0.05) return '';
    return char;
  }).join('');
}

// Loading Functions
let loaderInterval;
let loaderEl = null;

function startLoading() {
  const frames = ['.', '..', '...'];
  const colors = [COLORS.primary, COLORS.primary];
  let i = 0;

  loaderEl = document.createElement('span');
  loaderEl.style.color = colors[0];
  outputEl.appendChild(loaderEl);

  loaderInterval = setInterval(() => {
    loaderEl.textContent = `> Summoning${frames[i % frames.length]}`;
    loaderEl.style.color = colors[i % colors.length];
    i++;
    scrollToBottom();
  }, 400);
}

function stopLoading() {
  clearInterval(loaderInterval);
  if (loaderEl) {
    loaderEl.remove();
    loaderEl = null;
  }
}

// Memory Functions
function logMemory(prompt, response) {
  try {
    const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
    logs.push({ 
      timestamp: new Date().toISOString(), 
      prompt, 
      response 
    });
    localStorage.setItem('ghostlog', JSON.stringify(logs));
  } catch (error) {
    console.error('Failed to log memory:', error);
  }
}

function showLog() {
  try {
    const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
    if (!logs.length) {
      print('> No ghost memories stored.');
      return;
    }
    
    logs.forEach((entry, i) => {
      print(`\n${i + 1}. [${entry.timestamp}]`);
      print(`> You: ${entry.prompt}`);
      print(`> Ghost: ${entry.response}`);
    });
  } catch (error) {
    console.error('Failed to show log:', error);
    print('> Error accessing ghost memories.');
  }
}

// Image Processing
async function imageToAscii(url, width = 80, height = 50) {
  return new Promise((resolve, reject) => {
    const canvas = document.getElementById('ascii-canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;

    img.onload = () => {
      try {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height).data;

        const chars = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];
        let ascii = '';

        for (let y = 0; y < height; y++) {
          let line = '';
          for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            const avg = (r + g + b) / 3;
            const index = Math.floor((avg / 255) * (chars.length - 1));
            line += chars[index];
          }
          ascii += line + '\n';
        }
        resolve(ascii);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => reject(new Error('Failed to load image'));
  });
}

// Boot Sequence
async function runBootSequence() {
  return new Promise((resolve) => {
    // Disable input during boot
    inputEl.disabled = true;
    sendBtn.disabled = true;
    

    setTimeout(() => {
      // Re-enable input and focus
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
      resolve();
    }, 1000);
  });
}

// Helper Functions
function scrollToBottom() {
  requestAnimationFrame(() => {
    outputEl.scrollTop = outputEl.scrollHeight;
  });
}

async function makeApiCall(prompt, model = 'deepseek-chat') {
  try {
    startLoading();
    const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, messages: [{ role: 'user', content: prompt }] })
    });
    stopLoading();
    return (await res.json()).choices[0].message.content;
  } catch (err) {
    stopLoading();
    throw err;
  }
}

function handleError(error, message = 'An error occurred') {
  console.error(message, error);
  print(`⚠️ ${message}: ${error.message}`, COLORS.error);
}

export {
  figlet,
  inputEl,
  outputEl,
  sendBtn,
  sendSound,
  glitchSound,
  melvilleSound,
  tarotOpenSound,
  tarotDrawSound,
  print,
  glitchify,
  startLoading,
  stopLoading,
  logMemory,
  showLog,
  imageToAscii,
  scrollToBottom,
  runBootSequence,
  makeApiCall,
  handleError
};
