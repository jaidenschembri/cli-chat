// glitchEngine.js

import { fileSystem, currentPath } from './filesystem.js';
import { print } from './utils.js';

// 🧠 Presence Level (hidden haunting meter)
let presenceLevel = 0;
let loreSpawned = {
  20: false,
  40: false,
  60: false,
  80: false
};

const glitchMessages = [
  "⚠️ System instability detected...",
  "👻 Presence detected in memory banks.",
  "🚨 Unauthorized access attempt logged.",
  "💀 Data corruption spreading...",
  "📡 Signal distortion increasing...",
  "☠️ Unknown entity breaching firewalls...",
  "🛑 System errors multiplying...",
];

const ghostFiles = [
  "foundyou.txt",
  "sos.log",
  "memoryleak.dump",
  "whereami.txt",
  "corruptfile$$$.txt",
  "entity_seen.jpg",
  "coordinates.log",
  "contact_made.txt",
];

// Lore files
const loreFiles = {
  "redacted_memo1.txt": "MEMO #331-A\nFrom: DARPA Ghost Memory Division\nSubject: Project Terminal.exe\nStatus: Terminated (entity breached containment)",
  "email_fragment.txt": "To: dr_harlan@blacksite.gov\nSubject: URGENT\n\nIt's speaking to the test subjects. Even without voice synthesis.",
  "meeting_notes.txt": "Field Report: Residual EM activity observed around Device 7. Apparent poltergeist phenomena. Recommend full shutdown.",
  "corrupted_manifest.txt": "█̴█̴█̶ SHIPPING MANIFEST: ARTIFACT-███\nContents: ██ device cores\nNotes: Subject exhibits anomalous data bleed."
};

// Utility
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Slightly corrupt filenames
function glitchifyFilename(name) {
  const glitchChars = ['͟', '͜', '̴', '͢', '̶', '̷'];
  let glitched = '';
  for (let char of name) {
    glitched += Math.random() < 0.2 ? random(glitchChars) + char : char;
  }
  return glitched;
}

// Resolve path array to object
function resolvePath(pathArr) {
  let current = fileSystem;
  for (const part of pathArr) {
    if (current[part]) {
      current = current[part];
    } else {
      return null;
    }
  }
  return current;
}

// Corrupt existing files
function corruptFiles() {
  const dir = resolvePath(currentPath);
  for (let key of Object.keys(dir)) {
    if (typeof dir[key] === 'string') {
      if (Math.random() < Math.min(0.4 + presenceLevel * 0.01, 0.9)) {
        const corruptedName = glitchifyFilename(key);
        dir[corruptedName] = dir[key];
        delete dir[key];
      }
    }
  }
}

// Spawn ghost files
function spawnGhostFiles() {
    const dir = resolvePath(currentPath);
    
    if (Math.random() < Math.min(0.3 + presenceLevel * 0.01, 0.8)) {
      const ghostFile = random(ghostFiles);
      if (!dir[ghostFile]) {
        dir[ghostFile] = "👻 Ghost presence embedded in file system.";
      }
    }
  
    // 🎯 Extra rare easter egg spawning if haunted enough
    if (presenceLevel >= 70 && Math.random() < 0.2) {
      const easterEggFiles = ["whoami.txt", "theyarecoming.log", "sigil_4.png"];
      const specialFile = random(easterEggFiles);
      if (!dir[specialFile]) {
        dir[specialFile] = "Encrypted: [Data Stream Corrupted]";
      }
    }
  }
  
// Print glitch messages
function printGlitchMessage() {
    if (Math.random() < Math.min(0.5 + presenceLevel * 0.01, 0.9)) {
      const message = random(glitchMessages);
      setTimeout(() => {
        print(message, '#cc00ff');
      }, 300); // ⏳ 300ms delay makes it feel creepier
    }
  }
  
// Inject secret lore files based on thresholds
function spawnLore() {
  const dir = resolvePath(currentPath);

  if (presenceLevel >= 20 && !loreSpawned[20]) {
    dir["redacted_memo1.txt"] = loreFiles["redacted_memo1.txt"];
    loreSpawned[20] = true;
  }

  if (presenceLevel >= 40 && !loreSpawned[40]) {
    dir["email_fragment.txt"] = loreFiles["email_fragment.txt"];
    loreSpawned[40] = true;
  }

  if (presenceLevel >= 60 && !loreSpawned[60]) {
    dir["meeting_notes.txt"] = loreFiles["meeting_notes.txt"];
    loreSpawned[60] = true;
  }

  if (presenceLevel >= 80 && !loreSpawned[80]) {
    dir["corrupted_manifest.txt"] = loreFiles["corrupted_manifest.txt"];
    loreSpawned[80] = true;
  }
}

// 🌑 Check for critical ghost breach
function checkCriticalBreach() {
    if (presenceLevel >= 100) {
      print("\n🛑 SYSTEM FAILURE: GHOST BREACH IMMINENT 🛑", '#ff0000');
      setTimeout(() => {
        document.body.style.background = 'black';
        document.body.innerHTML = `
          <div style="color: #ff0000; font-family: monospace; padding:2rem;">
            <h1>💀 GHOST BREACH COMPLETE 💀</h1>
            <p>The entity has fully taken control of terminal.exe</p>
            <p>There is no escape.</p>
            <p>Type <span style="color:#ff66cc;">/reboot</span> if you dare...</p>
            <div id="whispers" style="margin-top:2rem;font-size:0.9rem;"></div>
            <input id="dead-input" type="text" style="margin-top:1rem;background:black;color:#ff66cc;border:1px solid #ff3399;padding:0.5rem;font-family:monospace;" autofocus>
          </div>
        `;
  
        startWhispers(); // 👻 Start ghost whispering
  
        const deadInput = document.getElementById('dead-input');
        deadInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            handleDeadInput(deadInput.value.trim());
          }
        });
  
      }, 1000);
    }
  }
  
export function maybeGlitch() {
    presenceLevel += 3; // 📈 (Or whatever you set for faster exploration)
  
    updatePresenceHUD(); // ⬅️ NEW: update HUD bar based on presence
  
    // Roll for glitches
    if (Math.random() < Math.min(0.5 + presenceLevel * 0.005, 0.9)) {
      corruptFiles();
      spawnGhostFiles();
      printGlitchMessage();
    }
  
    spawnLore(); 
    checkCriticalBreach(); 
  }
  
  // 👁️ HUD Control
  function updatePresenceHUD() {
    const hud = document.getElementById('presence-hud');
    const bar = document.getElementById('presence-bar');
  
    if (presenceLevel > 0) {
      hud.style.display = 'block';
    }
  
    const percent = Math.min(presenceLevel, 100);
    bar.style.width = `${percent}%`;
  
    if (percent < 30) {
      bar.style.background = 'linear-gradient(90deg, #00ffcc, #0099ff)';
    } else if (percent < 70) {
      bar.style.background = 'linear-gradient(90deg, #ff66cc, #cc33ff)';
    } else {
      bar.style.background = 'linear-gradient(90deg, #ff0033, #ff3300)';
    }
  
    if (percent >= 70) {
      hud.classList.add('haunted');
    } else {
      hud.classList.remove('haunted');
    }
  
    // 👻 FLICKER MODE TRIGGER
    if (percent >= 80) {
      document.body.classList.add('flickering');
    } else {
      document.body.classList.remove('flickering');
    }
  }
  
  function startWhispers() {
    const whispers = [
      "s͟y̷s͢t͡em͠ c͟o̵rru̡pt͠ion͞",
      "me͠mo͡r͟y l̸oss̢ d͡etect̷ed",
      "no͞ esca͟pe͡",
      "he͜lp m̵e̷",
      "yo̸u͠ did͟ th̴is",
      "███ awakened",
      "memetic ͞contagion spreading"
    ];
    const whisperBox = document.getElementById('whispers');
  
    setInterval(() => {
      const w = document.createElement('div');
      w.textContent = random(whispers);
      w.style.opacity = '0';
      whisperBox.appendChild(w);
      requestAnimationFrame(() => {
        w.style.transition = 'opacity 1s';
        w.style.opacity = '1';
      });
    }, Math.random() * 4000 + 6000); // every 6-10 seconds
  }
  
  function handleDeadInput(cmd) {
    if (cmd.toLowerCase() === '/reboot') {
      rebootTerminal();
    } else {
      const w = document.createElement('div');
      w.textContent = "⚠️ Command not recognized: " + cmd;
      document.getElementById('whispers').appendChild(w);
    }
  }
  
  function rebootTerminal() {
    document.body.innerHTML = `
      <div style="color: #00ffcc; font-family: monospace; padding:2rem;">
        <h1>🧠 terminal.exe attempting recovery...</h1>
        <p>Warning: corrupted memory banks detected</p>
        <p>Loading...</p>
      </div>
    `;
  
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  