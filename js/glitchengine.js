// glitchengine.js

import { fileSystem, currentPath } from './filesystem.js';
import { print } from './utils.js';

const PRESENCE_THRESHOLDS = {
  LORE: 20,
  RITUALS: 40,
  CORRUPTION: 60,
  MANIFESTATION: 80
};

const glitchMessages = [
  "⚠️ SYSTEM ERROR: Ghost presence detected",
  "⚠️ WARNING: Memory corruption detected",
  "⚠️ ALERT: Unauthorized access attempt",
  "⚠️ CAUTION: Signal interference",
  "⚠️ NOTICE: Data stream anomaly",
  "⚠️ WARNING: System integrity compromised",
  "⚠️ ALERT: Ghost signal strength increasing",
  "⚠️ CAUTION: Memory banks unstable",
  "⚠️ NOTICE: Terminal.exe experiencing interference",
  "⚠️ WARNING: Ghost presence intensifying"
];

let presenceLevel = 0;
let loreSpawned = {
  [PRESENCE_THRESHOLDS.LORE]: false,
  [PRESENCE_THRESHOLDS.RITUALS]: false,
  [PRESENCE_THRESHOLDS.CORRUPTION]: false,
  [PRESENCE_THRESHOLDS.MANIFESTATION]: false
};

export function getPresenceLevel() {
  return presenceLevel;
}

export function increasePresence(amount = 1) {
  presenceLevel = Math.min(100, presenceLevel + amount);
  checkPresenceThresholds();
}

function checkPresenceThresholds() {
  Object.entries(PRESENCE_THRESHOLDS).forEach(([key, threshold]) => {
    if (presenceLevel >= threshold && !loreSpawned[threshold]) {
      loreSpawned[threshold] = true;
      spawnLore(key.toLowerCase());
    }
  });
}

// Glitch strings
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

const loreFiles = {
  "redacted_memo1.txt": "MEMO #331-A\nFrom: DARPA Ghost Memory Division\nSubject: Project Terminal.exe\nStatus: Terminated (entity breached containment)",
  "email_fragment.txt": "To: dr_harlan@blacksite.gov\nSubject: URGENT\n\nIt's speaking to the test subjects. Even without voice synthesis.",
  "meeting_notes.txt": "Field Report: Residual EM activity observed around Device 7. Apparent poltergeist phenomena. Recommend full shutdown.",
  "corrupted_manifest.txt": "█̴█̴█̶ SHIPPING MANIFEST: ARTIFACT-███\nContents: ██ device cores\nNotes: Subject exhibits anomalous data bleed."
};

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function glitchifyFilename(name) {
  const glitchChars = ['͟', '͜', '̴', '͢', '̶', '̷'];
  let glitched = '';
  for (let char of name) {
    glitched += Math.random() < 0.2 ? random(glitchChars) + char : char;
  }
  return glitched;
}

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

function spawnGhostFiles() {
  const dir = resolvePath(currentPath);
  if (Math.random() < Math.min(0.3 + presenceLevel * 0.01, 0.8)) {
    const ghostFile = random(ghostFiles);
    if (!dir[ghostFile]) {
      dir[ghostFile] = "👻 Ghost presence embedded in file system.";
    }
  }
  if (presenceLevel >= 70 && Math.random() < 0.2) {
    const easterEggFiles = ["whoami.txt", "theyarecoming.log", "sigil_4.png"];
    const specialFile = random(easterEggFiles);
    if (!dir[specialFile]) {
      dir[specialFile] = "Encrypted: [Data Stream Corrupted]";
    }
  }
}

function printGlitchMessage() {
  if (Math.random() < Math.min(0.5 + presenceLevel * 0.01, 0.9)) {
    const message = random(glitchMessages);
    setTimeout(() => {
      print(message, '#cc00ff');
    }, 300);
  }
}

function spawnLore(type) {
  const dir = resolvePath(currentPath);
  if (type === 'lore') {
    dir["redacted_memo1.txt"] = loreFiles["redacted_memo1.txt"];
  } else if (type === 'rituals') {
    dir["email_fragment.txt"] = loreFiles["email_fragment.txt"];
  } else if (type === 'corruption') {
    dir["meeting_notes.txt"] = loreFiles["meeting_notes.txt"];
  } else if (type === 'manifestation') {
    dir["corrupted_manifest.txt"] = loreFiles["corrupted_manifest.txt"];
  }
}

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
      startWhispers();
      const deadInput = document.getElementById('dead-input');
      deadInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleDeadInput(deadInput.value.trim());
      });
    }, 1000);
  }
}

export function maybeGlitch() {
  presenceLevel += 3;
  if (Math.random() < Math.min(0.5 + presenceLevel * 0.005, 0.9)) {
    corruptFiles();
    spawnGhostFiles();
    printGlitchMessage();
  }
  checkPresenceThresholds();
  checkCriticalBreach();
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
  }, Math.random() * 4000 + 6000);
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
