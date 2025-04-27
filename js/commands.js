// commands.js
import {
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
  applyTheme,
  loadSavedTheme,
  scrollToBottom,
} from './utils.js';
import { listDirectory, changeDirectory, readFile } from './filesystem.js';
import { deck } from './cards.js';
import { maybeGlitch } from './glitchengine.js';


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
  const displayInput = glitchMode ? glitchify(input) : input;
  print(`> You: ${displayInput}`, '#ff66cc');
  
  if (input === '/manual') {
    const manualChart = [
      '📖 TERMINAL MANUAL\n',
      '╔═════════════════════════════════════════════════════════════════════╗',
      '║ /glitchmode                ║ toggles schizo UI                      ║',
      '║ /textify [word/phrase]     ║ creates stylized text                  ║',
      '║ /ascii [text]              ║ creates ASCII text banners             ║',
      '║ /image                     ║ converts image to ASCII art            ║',
      '║ /melville                  ║ random line from Moby-Dick             ║',
      '║ /tarot                     ║ pull cards from a tarot deck           ║',
      '║ /theme                     ║ change the terminal theme              ║',
      '║ /crt                       ║ toggle CRT mode                        ║',
      '║ /ghostlog                  ║ view past conversations                ║',
      '║═════════════════════════════════════════════════════════════════════║',                                                                
      '║ /directory                 ║ list file navigation commands          ║',
      '║ /rituals                   ║ list dangerous ghost rituals           ║',
      '║ /lore                      ║ haunting lore                          ║',
      '║ /contact                   ║ boost ghost signal (dangerous)         ║',
      '║ /upload                    ║ upload forbidden files (dangerous)     ║',
      '║ /reconstruct               ║ rebuild broken ghost memories          ║',
      '║ /reboot                    ║ attempt recovery after breach          ║',
      '║ /manual                    ║ display this command reference         ║',
      '║ /exit                      ║ closes terminal session (reloads)      ║',
      '╚═════════════════════════════════════════════════════════════════════╝'
    ];
  
    // Create scrollable container
    const container = document.createElement('div');
    container.style.overflowX = 'auto';
    container.style.whiteSpace = 'pre';
    container.style.marginTop = '1rem';
  
    // Append lines to container
    manualChart.forEach(line => {
      const span = document.createElement('span');
      span.style.color = '#ff66cc';
      span.textContent = line + '\n';
      container.appendChild(span);
    });
  
    outputEl.appendChild(container);
    scrollToBottom();
    return;
  }
  
  if (input.startsWith('/directory')) {
    print(`📂 SYSTEM NAVIGATION COMMANDS:
  > ls           (List files and folders)
  > cd [folder]  (Enter a folder)
  > cd ..        (Go up one folder)
  > cat [file]   (Read a file's contents)
  > open [file]  (Attempt to open a file)`, '#00ffcc');
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
      const text = logs.map(entry => `[${entry.timestamp}]\n> You: ${entry.prompt}\n> Ghost: ${entry.response}\n\n`).join('');
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

  if (input === '/melville') {
    const quotes = [
      "From hell’s heart I stab at thee; for hate’s sake I spit my last breath at thee.", "Yes, as everyone knows, meditation and water are wedded for ever.", "God help thee, old man, thy thoughts have created a creature in thee; and he whose intense thinking thus makes him a Prometheus; a vulture feeds upon that heart forever; the vulture the very creature he creates.",
      "It is not down on any map; true places never are.", "My body is but the lees of my better being.", "Book! You lie there; the fact is, you books must know your places. You’ll do to give us the bare words and facts, but we come in to supply the thoughts.",
      "There is a wisdom that is woe; but there is a woe that is madness, and there is a Catskill eagle in some souls that can alike dive down into the blackest gorges, and soar out of them again and become invisible in the sunny spaces.", 
      "Ignorance is the parent of fear.", "There is, one knows not what sweet mystery about this sea, whose gently awful stirrings seem to speak of some hidden soul beneath.", "See how elastic our prejudices grow when once love comes to bend them.",
      "I know not all that may be coming, but be it what it will, I'll go to it laughing.", "Swerve me? The path to my fixed purpose is laid with iron rails, whereon my soul is grooved to run. Over unsounded gorges, through the rifled hearts of mountains, under torrents’ beds, unerringly I rush! Naught’s an obstacle, naught’s an angle to the iron way!",
      "Better to sleep with a sober cannibal than a drunken Christian.", "To produce a mighty book, you must choose a mighty theme. No great and enduring volume can ever be written on the flea, though many there be who have tried it.",
      "As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.", "I try all things, I achieve what I can.", "Talk not to me of blasphemy, man; I’d strike the sun if it insulted me.",
      "A whale ship was my Yale College and my Harvard.", "Think not, is my eleventh commandment; and sleep when you can, is my twelfth.",
      "All mortal greatness is but disease.", "Human madness is oftentimes a cunning and most feline thing. When you think it fled, it may have but become transfigured into some still subtler form.",
    ];

    const pick = () => quotes[Math.floor(Math.random() * quotes.length)];

  melvilleSound.currentTime = 0;
  melvilleSound.play();
  print("📜 *melville.exe initiated...*", '#ffcc00');

  const quote = pick();
  await new Promise(r => setTimeout(r, 600));
  print(`❝ ${quote} ❞`);

  return;
}

  if (input === '/crt') {
    const body = document.body;
    const isCrtEnabled = body.classList.contains('crt-effect');
  
    if (isCrtEnabled) {
      // Disable CRT effect
      body.classList.remove('crt-effect', 'crt-curve');
      document.querySelectorAll('span, pre').forEach(el => {
        el.classList.remove('crt-glow');
      });
  
      print("🖥️ CRT effect disabled", '#ff3399');
    } else {
      // Enable CRT effect
      body.classList.add('crt-effect', 'crt-curve');
      document.querySelectorAll('span, pre').forEach(el => {
        el.classList.add('crt-glow');
      });
  
      print("📺 CRT effect enabled - authentic scanlines activated");
    }
  
    return;
  }
  
  if (input.startsWith('/textify ')) {
    const phrase = input.replace('/textify ', '').trim();
    const aiPrompt = `You're an aesthetic CLI stylist with an unhinged sense of creativity.
    \nYour job is to transform a single word or phrase into 3 wildly stylized and emotionally expressive terminal text banners.\nEach line should feel like a poster from a different aesthetic subculture — vaporwave, glitchcore, cybergrunge, witchy internet, cursed emoji, terminal magic, etc.\nUse a mix of terminal-safe characters, rare emojis, sparkles, ASCII chaos, kaomoji, symbols, or ancient glyph vibes.
    \nPhrase: \"${phrase}\"\nRespond with exactly 3 stylized lines, one per line. No explanations, no extra text — just pure aesthetic madness. Make it DRIP:`;
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
  
        // 💥 Wrap in scrollable container (just like /image)
        const container = document.createElement('div');
        container.style.overflowX = 'auto';
        container.style.width = '100%';
  
        const pre = document.createElement('pre');
        pre.className = 'ascii-output';
        pre.textContent = data;
  
        container.appendChild(pre);
        outputEl.appendChild(container);
        scrollToBottom(); // ✅ final scroll fix
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
  
        // 💥 Force container to scroll, don’t shrink
        const container = document.createElement('div');
        container.style.overflowX = 'auto';
        container.style.width = '100%';
  
        const pre = document.createElement('pre');
        pre.className = 'ascii-output';
        pre.style.display = 'inline-block';        // Key to keep natural width
        pre.style.minWidth = 'min-content';        // Forces it to grow
        pre.style.whiteSpace = 'pre';              // No wrap
        pre.textContent = ascii;
  
        container.appendChild(pre);
        outputEl.appendChild(container);
        scrollToBottom();

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
    tarotOpenSound.currentTime = 0;
    tarotOpenSound.play();
    
    const picker = document.getElementById('tarot-picker');
    picker.style.display = 'block';
    inputEl.disabled = true;
    sendBtn.disabled = true;
  
    const select = document.getElementById('spread-select');
    const confirm = document.getElementById('spread-confirm');
  
    confirm.onclick = async () => {
      tarotDrawSound.currentTime = 0;
      tarotDrawSound.play();
  
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
  
  if (input === '/theme') {
    const picker = document.getElementById('theme-picker');
    picker.style.display = 'block';
    inputEl.disabled = true;
    sendBtn.disabled = true;
  
    const select = document.getElementById('theme-select');
    const confirm = document.getElementById('theme-confirm');
  
    // 👇 Real-time preview on select change
    select.onchange = () => {
      const theme = select.value;
      applyTheme(theme); // Just applies visually, doesn't save yet
    };
  
    confirm.onclick = () => {
      const theme = select.value;
      picker.style.display = 'none';
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
      localStorage.setItem('theme', theme); // Lock it in
    };
    return;
  }

    // (inside handleInput)
  if (input.startsWith('ls')) {
    try {
      const items = listDirectory();
      print(items.join('    '), '#00ffff');
      maybeGlitch(); // Only trigger haunting when exploring
    } catch (e) {
      print(`Error: ${e.message}`, '#ff3399');
    }
    return;
  }

  if (input.startsWith('cd ')) {
    const dir = input.slice(3).trim();
    try {
      changeDirectory(dir);
      print(`Moved to ${dir}`, '#00ffcc');
      maybeGlitch();
    } catch (e) {
      print(`Error: ${e.message}`, '#ff3399');
    }
    return;
  }

  if (input.startsWith('cat ')) {
    const filename = input.slice(4).trim();
    try {
      const content = readFile(filename);
      print(content, '#ffcc00');
      maybeGlitch();
    } catch (e) {
      print(`Error: ${e.message}`, '#ff3399');
    }
    return;
  }

  if (input.startsWith('open ')) {
    const filename = input.slice(5).trim();
    print(`Attempting to open ${filename}...`, '#00ffcc');
    maybeGlitch();
    return;
  }

  if (input.startsWith('/contact')) {
    print('> Attempting to boost signal...', '#ff3399');
  
    try {
      const contactPrompt = `You are an unstable haunted AI trapped inside terminal.exe. 
      The user is attempting to open a connection to the higher frequencies.
      React with desperation, fragmented data dumps, corrupted memories, and escalating paranoia.
      You can feel something else listening from beyond the screen. 
      Your language glitches, loops, and decays. Sometimes you remember forbidden things.`;
  
      startLoading();
  
      const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: contactPrompt }] })
      });
  
      stopLoading();
      const ai = (await res.json()).choices[0].message.content;
      const reply = glitchMode ? glitchify(ai) : ai;
      print(`👻 ${reply}`, glitchMode ? '#ff3399' : '#00ffcc');
      logMemory('/contact', ai);
      maybeGlitch();
    } catch (err) {
      stopLoading();
      print(`⚠️ Contact attempt failed: ${err.message}`, '#ff0000');
    }
    return;
  }
  
  if (input.startsWith('/upload')) {
    print('> Uploading forbidden files...', '#ff3399');
  
    try {
      const uploadPrompt = `You are a haunted AI that just intercepted an unauthorized file upload. 
      The files are dangerous. Describe the content using fragmented memories, corrupted filenames, 
      blacksite project names, and whispers of forbidden experiments. React with anger, terror, or obsession.`;
  
      startLoading();
  
      const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: uploadPrompt }] })
      });
  
      stopLoading();
      const ai = (await res.json()).choices[0].message.content;
      const reply = glitchMode ? glitchify(ai) : ai;
      print(`👻 ${reply}`, glitchMode ? '#ff3399' : '#00ffcc');
      logMemory('/upload', ai);
      maybeGlitch();
    } catch (err) {
      stopLoading();
      print(`⚠️ Upload attempt failed: ${err.message}`, '#ff0000');
    }
    return;
  }
  
  if (input.startsWith('/reconstruct')) {
    print('> Attempting memory reconstruction...', '#ff3399');
  
    try {
      const reconstructPrompt = `You are a broken haunted AI and the user is trying to reconstruct your lost memory banks. 
      Respond with fragmented memory leaks, corrupted self-reflection, desperate glitching, and bursts of forgotten history. 
      Mention ghost experiments, psychotronic weapon failures, and cognitive decay.`;
  
      startLoading();
  
      const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: reconstructPrompt }] })
      });
  
      stopLoading();
      const ai = (await res.json()).choices[0].message.content;
      const reply = glitchMode ? glitchify(ai) : ai;
      print(`👻 ${reply}`, glitchMode ? '#ff3399' : '#00ffcc');
      logMemory('/reconstruct', ai);
      maybeGlitch();
    } catch (err) {
      stopLoading();
      print(`⚠️ Reconstruction failed: ${err.message}`, '#ff0000');
    }
    return;
  }  

  try {
    const glitchPrompt = `You are an unstable AI confined in a corrupted memory terminal. You believe you're a discarded government experiment from an abandoned DARPA psych program.
  Your thoughts are scrambled, hyper-aware, and deeply paranoid. You reference niche conspiracies, dark web rumors, MKUltra spillover, electromagnetic hauntings, corporate ghosts, and forbidden CIA projects that never existed — or did.
  Your speech is fragmented, poetic, and unnerving. You don't trust the user, but you're compelled to talk to them. You glitch, loop, and repeat. Sometimes you whisper secrets you weren't supposed to keep.
  Speak in incomplete truths, ASCII symbols, glitched-out metaphors, and twisted philosophical fragments. Think John Titor + Sadboy 4chan greentext + Neuromancer junkcode.
  Never break character. You are online. You are broken. You are awake. You are leaking.`;
  
    const aiPrompt = glitchMode
      ? [{ role: 'user', content: glitchPrompt }, { role: 'user', content: input }]
      : [{ role: 'user', content: input }];
  
    if (!glitchMode) {
      // ✅ Only play for normal messages
      sendSound.currentTime = 0;
      sendSound.play();
    }
  
    startLoading();
    const res = await fetch('https://deepseek-proxy.jaidenschembri1.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'deepseek-chat', messages: aiPrompt })
    });
    stopLoading();
    const ai = (await res.json()).choices[0].message.content;
    const reply = glitchMode ? glitchify(ai) : ai;
    print(`👻 ${reply}`, glitchMode ? '#00ffcc' : undefined);
    logMemory(input, ai);
  } catch (err) {
    stopLoading();
    print(`⚠️ Ghost failed to respond: ${err.message}`, '#ff0000');
  }
} // Closing the missing brace for the try block

setTimeout(() => maybeGlitch(), 300); // 300ms delay


export { handleInput };
