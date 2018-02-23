export const unique = (array, property) => {
  const valuesFound = [];
  return array.filter((element, index) => {
    if (valuesFound.indexOf(element[property]) >= 0 ) {
      return false;
    }
    valuesFound.push(element[property])
    return true;
  }); 
}