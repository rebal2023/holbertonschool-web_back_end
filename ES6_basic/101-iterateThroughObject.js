export default function iterateThroughObject(reportWithIterator) {
    const employeeArray = [...reportWithIterator];
    return employeeArray.join(' | ');
  }
  