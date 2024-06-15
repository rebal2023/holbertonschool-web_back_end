export default function appendToEachArrayValue(array, appendString) {
    11;rgb:2b2b/2b2b/2b2bconst array2 = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    array2[idx] = appendString + value;
  }

  return array2;
}
