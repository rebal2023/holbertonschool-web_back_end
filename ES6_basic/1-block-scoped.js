export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
      task = true;  // Reassigning existing variables
      task2 = false;  // Reassigning existing variables
    }
  
    return [task, task2];
  }
  