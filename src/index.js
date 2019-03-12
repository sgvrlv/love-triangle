  /**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let numberLove = 0, firstNum, secondNum, thirdNum;
        
  for (i = 0; i < preferences.length; i++) {
    firstNum = preferences[i] - 1;
    secondNum = preferences[firstNum] - 1;
    thirdNum = preferences[secondNum] - 1;
    if ((i == thirdNum) && (firstNum != secondNum) && (secondNum != thirdNum) && (thirdNum != firstNum)) {
      numberLove++;
    }
  }
  return numberLove / 3;
};
};

