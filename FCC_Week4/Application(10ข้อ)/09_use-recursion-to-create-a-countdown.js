// Only change code below this line
// ใช้ recursive
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
countdown(10)
countdown(5)
// Only change code above this line