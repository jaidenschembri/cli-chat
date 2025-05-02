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
    try {
      if (dir === '..') {
        if (currentPath.length > 1) {
          currentPath.pop();
        }
      } else {
        const newPath = [...currentPath, dir];
        const resolved = resolvePath(newPath);
        if (resolved && typeof resolved === 'object') {
          currentPath = newPath;
        } else {
          throw new Error(`No such directory: ${dir}`);
        }
      }
    } catch (error) {
      throw new Error(`Failed to change directory: ${error.message}`);
    }
  }
  
  export function listDirectory() {
    try {
      const dir = resolvePath(currentPath);
      if (!dir || typeof dir !== 'object') {
        throw new Error('Invalid directory');
      }
      return Object.keys(dir);
    } catch (error) {
      throw new Error(`Failed to list directory: ${error.message}`);
    }
  }
  
  export function readFile(filename) {
    try {
      const dir = resolvePath(currentPath);
      if (!dir || typeof dir !== 'object') {
        throw new Error('Invalid directory');
      }
      if (dir[filename]) {
        if (typeof dir[filename] === 'string') {
          return dir[filename];
        } else {
          throw new Error(`${filename} is a directory, not a file.`);
        }
      } else {
        throw new Error(`No such file: ${filename}`);
      }
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }
  
  function resolvePath(pathArr) {
    try {
      let current = fileSystem;
      for (const part of pathArr) {
        if (!current || typeof current !== 'object') {
          throw new Error(`Invalid path: ${pathArr.join('/')}`);
        }
        if (!current[part]) {
          return null;
        }
        current = current[part];
      }
      return current;
    } catch (error) {
      console.error('Path resolution error:', error);
      return null;
    }
  }
  