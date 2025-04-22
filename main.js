import { deck } from './tarot/cards.js';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';
import doom from 'figlet/importable-fonts/Doom.js';
import slant from 'figlet/importable-fonts/Slant.js';
import cyberlarge from 'figlet/importable-fonts/Cyberlarge.js';

figlet.parseFont('Standard', standard);
figlet.parseFont('Doom', doom);
figlet.parseFont('Slant', slant);
figlet.parseFont('Cyberlarge', cyberlarge);

const inputEl = document.getElementById('terminal-input');
const outputEl = document.getElementById('output');
const sendBtn = document.getElementById('send-btn');
const sendSound = document.getElementById('sfx-send');
const glitchSound = document.getElementById('sfx-glitch');

let glitchMode = false;
let loaderInterval;
let loaderEl = null;

const glitchify = (text) => {
  const chars = ['̷', '͟', '͜', '̶', '͡', '͠', '͢', '̸', '⸸', '⚠', '⛧'];
  return text.split('').map(char => {
    if (Math.random() < 0.1) return chars[Math.floor(Math.random() * chars.length)] + char;
    if (Math.random() < 0.05) return '';
    return char;
  }).join('');
};

const print = (text, color = '#00ffcc') => {
  const span = document.createElement('span');
  span.style.color = color;
  span.textContent = text + '\n';
  outputEl.appendChild(span);
  outputEl.scrollTop = outputEl.scrollHeight;
};

const startLoading = () => {
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
};

const stopLoading = () => {
  clearInterval(loaderInterval);
  if (loaderEl) {
    loaderEl.remove();
    loaderEl = null;
  }
};

const logMemory = (prompt, response) => {
  const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
  logs.push({ timestamp: new Date().toISOString(), prompt, response });
  localStorage.setItem('ghostlog', JSON.stringify(logs));
};

const showLog = () => {
  const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
  if (!logs.length) return print('> No ghost memories stored.', '#777');
  logs.forEach((entry, i) => {
    print(`\n${i + 1}. [${entry.timestamp}]`, '#ccc');
    print(`> You: ${entry.prompt}`, '#ff66cc');
    print(`> Ghost: ${entry.response}`, '#00ffff');
  });
};

const tarotSpread = async (type) => {
  const pick = () => deck[Math.floor(Math.random() * deck.length)];
  const wait = ms => new Promise(r => setTimeout(r, ms));
  if (type === 'One card') {
    await wait(500);
    const card = pick();
    print(`🔮 ${card.name}\n${card.card}`, '#ff3399');
  } else if (type === 'Three cards') {
    for (let label of ['Past', 'Present', 'Future']) {
      await wait(500);
      const card = pick();
      print(`\n${label}:\n${card.name}\n${card.card}`, '#ff66cc');
    }
  } else if (type === 'Celtic cross') {
    const labels = ['You', 'Your obstacle', 'Root of the matter', 'The past', 'What’s above you',
      'The near future', 'Your attitude', 'Others involved', 'Hopes/Fears', 'Outcome'];
    for (let label of labels) {
      await wait(500);
      const card = pick();
      print(`\n${label}:\n${card.name}\n${card.card}`, '#cc00ff');
    }
  } else if (type === 'Show me the deck') {
    for (let card of deck) {
      await wait(100);
      print(`${card.name}\n${card.card}`, '#999');
    }
  }
};

const handleInput = async () => {
  const input = inputEl.value.trim();
  if (!input) return;
  inputEl.value = '';
  print(`> You: ${input}`, '#ff66cc');
  sendSound.currentTime = 0;
  sendSound.play();

  if (input === '/manual') {
    const manual = [
      '📖 CRYPTODREAM TERMINAL MANUAL\n',
      '/glitchmode               — toggles corrupted UI',
      '/textify [word/phrase]    — AI-stylized terminal banners based on your vibe',
      '/ascii [text]             — creates large ASCII text banners from a word or phrase',
      '/image                    — converts an image to ASCII art',
      '/ghostlog                 — view past ghost conversations',
      '/tarot                    — pull cards from a ASCII tarot deck',
      '/manual                   — display this command reference',
      '/exit                     — closes the cryptodream session (browser reload)\n'
    ];
    manual.forEach(line => print(line, '#ff66cc'));
    return;
  }

  const glitchBootSequence = async () => {
    outputEl.innerHTML = ''; // Clear terminal
  
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const glitchLines = [
      '[cryptodream.exe v͠i͟r͘t̡ual̡ cor͢e r̕͢eb͘͟oot...]',
      '>>> GlitchMODE INITIALIZED',
      'ghost signal corrupted... attempting resync...',
      '██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',
    ];
  
    const colors = ['#ff3399', '#cc00ff', '#ff3300', '#00ffff'];
  
    for (let i = 0; i < glitchLines.length; i++) {
      const line = glitchify(glitchLines[i]);
      print(line, colors[i % colors.length]);
      await sleep(400);
    }
  };
  

  const imageToAscii = async (url, width = 80, height = 50) => {
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
  };
  

  if (input === '/glitchmode') {
    glitchMode = !glitchMode;
    if (glitchMode) {
      glitchSound.play();
      await glitchBootSequence();
    } else {
      print("🧼 Glitchmode deactivated", '#ff3399');
    }
    return;
  }
  

  if (input === '/exit') {
    print("👻 The ghost vanishes into the datastream... refreshing...", '#999');
    setTimeout(() => location.reload(), 1500);
    return;
  }

  if (input === '/ghostlog') {
    showLog();
  
    const dlBtn = document.getElementById('ghostlog-download');
    dlBtn.style.display = 'inline-block';
  
    dlBtn.onclick = () => {
      const logs = JSON.parse(localStorage.getItem('ghostlog') || '[]');
      const text = logs.map(entry =>
        `[${entry.timestamp}]\n> You: ${entry.prompt}\n> Ghost: ${entry.response}\n\n`
      ).join('');
  
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ghostlog.txt';
      a.click();
      URL.revokeObjectURL(url);
    };
  
    return;
  }
  

  if (input.startsWith('/textify ')) {
    const phrase = input.replace('/textify ', '').trim();
    const aiPrompt = `You're an aesthetic CLI stylist with an unhinged sense of creativity.
    Your job is to transform a single word or phrase into 3 wildly stylized and emotionally expressive terminal text banners.
    Each line should feel like a poster from a different aesthetic subculture — vaporwave, glitchcore, cybergrunge, witchy internet, cursed emoji, terminal magic, etc.
    Use a mix of terminal-safe characters, rare emojis, sparkles, ASCII chaos, kaomoji, symbols, or ancient glyph vibes.
    Phrase: "${phrase}"
    Respond with exactly 3 stylized lines, one per line. No explanations, no extra text — just pure aesthetic madness. Make it DRIP:`;
        try {
      startLoading();
      const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: aiPrompt }] })
      });
      stopLoading();
      const lines = (await res.json()).choices[0].message.content.trim().split('\n');
      const colorPalette = ['#ff66cc', '#ff3399', '#cc00ff', '#66ccff', '#00ffff', '#00ffcc', '#ffff00', '#ff9933'];
      lines.forEach((line, i) => print(line, colorPalette[i % colorPalette.length]));
          } catch (err) {
      stopLoading();
      print(`⚠️ Textify error: ${err.message}`, '#ff0000');
    }
    return;
  }

  if (input.startsWith('/ascii ')) {
    const text = input.replace('/ascii ', '').trim();
    const asciiMenu = document.getElementById('ascii-picker');
    const fontSelect = document.getElementById('ascii-font');
    const confirmBtn = document.getElementById('ascii-confirm');
  
    asciiMenu.style.display = 'block';
    inputEl.disabled = true;
    sendBtn.disabled = true;
  
    const handleFontConfirm = () => {
      const font = fontSelect.value;
      asciiMenu.style.display = 'none';
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
  
      figlet.text(text, { font }, (err, data) => {
        if (err) {
          print(`⚠️ ASCII error: ${err.message}`, '#ff0000');
        } else {
          print(data, '#00ffcc');
        }
      });
    };
  
    confirmBtn.onclick = handleFontConfirm;
    return;
  }
  

  if (input.startsWith('/image')) {
    const url = input.replace('/image', '').trim();
    const uploadInput = document.getElementById('ascii-upload');
  
    if (url) {
      try {
        startLoading();
        const ascii = await imageToAscii(url);
        stopLoading();
        print(ascii, '#00ffcc');
      } catch (err) {
        stopLoading();
        print(`⚠️ Failed to render image: ${err.message}`, '#ff0000');
      }
      return;
    }
  
    // No URL? Trigger file upload
    uploadInput.click();
    uploadInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          startLoading();
          const ascii = await imageToAscii(event.target.result);
          stopLoading();
          print(ascii, '#00ffcc');
        } catch (err) {
          stopLoading();
          print(`⚠️ Image error: ${err.message}`, '#ff0000');
        }
      };
      reader.readAsDataURL(file);
    };
    return;
  }
  
  

  if (input === '/tarot') {
    const picker = document.getElementById('tarot-picker');
    picker.style.display = 'block';
    inputEl.disabled = true;
    sendBtn.disabled = true;
  
    const select = document.getElementById('spread-select');
    const confirm = document.getElementById('spread-confirm');
  
    const handleSelection = async () => {
      const choice = select.value;
      picker.style.display = 'none';
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
  
      if (choice === 'Cancel') {
        print('🔙 Returned to the ghost.', '#888');
        return;
      }
  
      await tarotSpread(choice);
    };
  
    confirm.onclick = handleSelection;
    return;
  }
  

  // Everything else = ghost convo
  try {
    startLoading();
    const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: input }] })
    });
    stopLoading();
    const ai = (await res.json()).choices[0].message.content;
    const reply = glitchMode ? glitchify(ai) : ai;
    print(`👻 ${reply}`, glitchMode ? '#00ffcc' : '#00ffff');
    logMemory(input, ai);
  } catch (err) {
    stopLoading();
    print(`⚠️ Ghost failed to respond: ${err.message}`, '#ff0000');
  }
};

inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleInput();
});
sendBtn.addEventListener('click', handleInput);
