// utils.js
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

// DOM Elements
const inputEl = document.getElementById('terminal-input');
const outputEl = document.getElementById('output');
const sendBtn = document.getElementById('send-btn');
const sendSound = document.getElementById('sfx-send');
const glitchSound = document.getElementById('sfx-glitch');

// Print to terminal
function print(text, color = '#00ffcc') {
  const span = document.createElement('span');
  span.style.color = color;
  span.textContent = text + '\n';
  outputEl.appendChild(span);
  outputEl.scrollTop = outputEl.scrollHeight;
}

// Glitchify text
function glitchify(text) {
  const chars = ['̷', '͟', '͜', '̶', '͡', '͠', '͢', '̸', '⸸', '⚠', '⛧'];
  return text.split('').map(char => {
    if (Math.random() < 0.1) return chars[Math.floor(Math.random() * chars.length)] + char;
    if (Math.random() < 0.05) return '';
    return char;
  }).join('');
}

// Loading animation
let loaderInterval;
let loaderEl = null;

function startLoading() {
  const frames = ['.', '..', '...'];
  const colors = ['#ff66cc', '#ff3399'];
  let i = 0;
  loaderEl = document.createElement('span');
  loaderEl.style.color = colors[0];
  outputEl.appendChild(loaderEl);
  loaderInterval = setInterval(() => {
    loaderEl.textContent = `> 🧠 Summoning${frames[i % frames.length]}`;
    loaderEl.style.color = colors[i % colors.length];
    i++;
  }, 400);
}

function stopLoading() {
  clearInterval(loaderInterval);
  if (loaderEl) {
    loaderEl.remove();
    loaderEl = null;
  }
}

// Memory logging
function logMemory(prompt, response) {
  const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
  logs.push({ timestamp: new Date().toISOString(), prompt, response });
  localStorage.setItem('ghostlog', JSON.stringify(logs));
}

function showLog() {
  const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
  if (!logs.length) return print('> No ghost memories stored.', '#777');
  logs.forEach((entry, i) => {
    print(`\n${i + 1}. [${entry.timestamp}]`, '#ccc');
    print(`> You: ${entry.prompt}`, '#ff66cc');
    print(`> Ghost: ${entry.response}`, '#00ffff');
  });
}

// Image to ASCII
function imageToAscii(url, width = 80, height = 50) {
  return new Promise((resolve, reject) => {
    const canvas = document.getElementById('ascii-canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;

    img.onload = () => {
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
    };

    img.onerror = () => reject(new Error('Failed to load image'));
  });
}

export {
  figlet,
  inputEl,
  outputEl,
  sendBtn,
  sendSound,
  glitchSound,
  print,
  glitchify,
  startLoading,
  stopLoading,
  logMemory,
  showLog,
  imageToAscii
};
