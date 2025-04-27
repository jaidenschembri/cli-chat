// filesystem.js

export const fileSystem = {
    home: {
      user: {
        "readme.txt": "Welcome to GhostOS. You are not alone.",
        "diary.log": "April 26th: Something feels wrong. I think... something else is in the system.",
      },
      ghost: {
        "error.txt": "!!! SYSTEM ERROR: UNAUTHORIZED PRESENCE DETECTED",
        "memory.dump": "fragmented_ghost_mind>> corrupted files detected...",
      }
    },
    bin: {
      "notepad.exe": "This will eventually open a fake notepad app!",
      "player.exe": "This will eventually open a fake music player!"
    }
  };
  
  // Tracks where the user is currently "located"
  export let currentPath = ['home'];
  
  export function changeDirectory(dir) {
    if (dir === '..') {
      if (currentPath.length > 1) {
        currentPath.pop();
      }
    } else {
      const newPath = [...currentPath, dir];
      if (resolvePath(newPath)) {
        currentPath = newPath;
      } else {
        throw new Error(`No such directory: ${dir}`);
      }
    }
  }
  
  export function listDirectory() {
    const dir = resolvePath(currentPath);
    return Object.keys(dir);
  }
  
  export function readFile(filename) {
    const dir = resolvePath(currentPath);
    if (dir[filename]) {
      if (typeof dir[filename] === 'string') {
        return dir[filename];
      } else {
        throw new Error(`${filename} is a directory, not a file.`);
      }
    } else {
      throw new Error(`No such file: ${filename}`);
    }
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
  