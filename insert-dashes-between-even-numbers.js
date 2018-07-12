const arr1 = [4, 8, 7, 6, 2, 4, 3, 2, 10, 22, 13, 12];

function _x(y) {
  let newArr = [];
  for (let i = 0; i < y.length; i++) {
    if (y[i] % 2 === 0 && y[i - 1] % 2 === 0) {
      newArr.push("-" + y[i]);
    } else {
      newArr.push(y[i]);
    }
  }
  console.log(newArr.join().replace(/,/g, "").toString());
}

_x(arr1);
