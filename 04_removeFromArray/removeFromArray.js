const removeFromArray = function (arr, ...removeElement) {
  for (j = 0; j <= removeElement.length - 1; j++) {
    for (let i = 0; i <= arr.length; i++) {
      if (removeElement[j] == arr[i]) {
        const index = arr.indexOf(removeElement[j]);
        arr.splice(index, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
