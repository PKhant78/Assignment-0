function setUnionOfAnyAmountOfSets(...args) {
  const Union = new Set();
    for (const set of args) {
      for (const num of set) {
        Union.add(num);
      }
    }
  return Union;
}
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;