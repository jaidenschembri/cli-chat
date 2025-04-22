// commands.js
import {
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
} from './utils.js';

import { deck } from '../tarot/cards.js';

let glitchMode = false;

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

async function handleInput() {
  const input = inputEl.value.trim();
  if (!input) return;
  inputEl.value = '';
  print(`> You: ${input}`, '#ff66cc');
  sendSound.currentTime = 0;
  sendSound.play();

  if (input === '/manual') {
    const manual = [
      '📖 TERMINAL MANUAL\n',
      '/glitchmode               — toggles corrupted UI',
      '/textify [word/phrase]    — AI-stylized terminal banners based on your vibe',
      '/ascii [text]             — creates large ASCII text banners from a word or phrase',
      '/image                    — converts an image to ASCII art',
      '/ghostlog                 — view past ghost conversations',
      '/tarot                    — pull cards from a ASCII tarot deck',
      '/manual                   — display this command reference',
      '/exit                     — closes the terminal session (browser reload)\n'
    ];
    manual.forEach(line => print(line, '#ff66cc'));
    return;
  }

  if (input === '/glitchmode') {
    glitchMode = !glitchMode;
    if (glitchMode) {
      glitchSound.play();
      const glitchLines = [
        '[terminal.exe v͠i͟r͘t̡ual̡ cor͢e r̕͢eb͘͟oot...]',
        '>>> GlitchMODE INITIALIZED',
        'ghost signal corrupted... attempting resync...',
        '██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',
      ];
      const colors = ['#ff3399', '#cc00ff', '#ff3300', '#00ffff'];
      for (let i = 0; i < glitchLines.length; i++) {
        const line = glitchify(glitchLines[i]);
        print(line, colors[i % colors.length]);
        await new Promise(r => setTimeout(r, 400));
      }
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
      const text = logs.map(entry => `[$
        {entry.timestamp}]\n> You: ${entry.prompt}\n> Ghost: ${entry.response}\n\n`).join('');
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
    const aiPrompt = `You're an aesthetic CLI stylist with an unhinged sense of creativity.\nYour job is to transform a single word or phrase into 3 wildly stylized and emotionally expressive terminal text banners.\nEach line should feel like a poster from a different aesthetic subculture — vaporwave, glitchcore, cybergrunge, witchy internet, cursed emoji, terminal magic, etc.\nUse a mix of terminal-safe characters, rare emojis, sparkles, ASCII chaos, kaomoji, symbols, or ancient glyph vibes.\nPhrase: \"${phrase}\"\nRespond with exactly 3 stylized lines, one per line. No explanations, no extra text — just pure aesthetic madness. Make it DRIP:`;
    try {
      startLoading();
      const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: aiPrompt }] })
      });
      stopLoading();
      const lines = (await res.json()).choices[0].message.content.trim().split('\n');
      const colors = ['#ff66cc', '#ff3399', '#cc00ff', '#66ccff', '#00ffff', '#00ffcc', '#ffff00', '#ff9933'];
      lines.forEach((line, i) => print(line, colors[i % colors.length]));
    } catch (err) {
      stopLoading();
      print(`⚠️ Textify error: ${err.message}`, '#ff0000');
    }
    return;
  }

  if (input.startsWith('/ascii ')) {
    const text = input.replace('/ascii ', '').trim();
    const picker = document.getElementById('ascii-picker');
    const select = document.getElementById('ascii-font');
    const confirm = document.getElementById('ascii-confirm');

    picker.style.display = 'block';
    inputEl.disabled = true;
    sendBtn.disabled = true;

    confirm.onclick = () => {
      const font = select.value;
      picker.style.display = 'none';
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
      figlet.text(text, { font }, (err, data) => {
        if (err) return print(`⚠️ ASCII error: ${err.message}`, '#ff0000');
        print(data, '#00ffcc');
      });
    };
    return;
  }

  if (input.startsWith('/image')) {
    const url = input.replace('/image', '').trim();
    const upload = document.getElementById('ascii-upload');

    const render = async (src) => {
      try {
        startLoading();
        const ascii = await imageToAscii(src);
        stopLoading();
        print(ascii, '#00ffcc');
      } catch (err) {
        stopLoading();
        print(`⚠️ Failed to render image: ${err.message}`, '#ff0000');
      }
    };

    if (url) return render(url);

    upload.click();
    upload.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => render(event.target.result);
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

    confirm.onclick = async () => {
      const choice = select.value;
      picker.style.display = 'none';
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();

      if (choice === 'Cancel') return print('🔙 Returned to the ghost.', '#888');
      await tarotSpread(choice);
    };
    return;
  }

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
}

export { handleInput };
