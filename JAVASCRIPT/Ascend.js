const nums_ascend_one = [];
const nums_ascend_two = [];
let text = "Ingresa el numero";
for (let i = 0; i < 10; i++) {
  let num = prompt(text);
  num = Number(num);
  if (nums_ascend_one.length < 5) {
    text = "Ingresa el numero para el primero";
    if (nums_ascend_one.length > 0) {
      if (nums_ascend_one[i - 1] < num) nums_ascend_one.push(num);
      else {
        i--;
        alert(
          "The number must be greater than the previous one 1",
          nums_ascend_one
        );
      }
    } else {
      nums_ascend_one.push(num);
    }
    if(nums_ascend_one.length == 5) text = "Ingresa el numero para el segundo";
  }

  if (i > 4) {
    a = 0;
    text = "Ingresa el numero para el segundo";
    if (nums_ascend_two.length > 0) {
        a++;
      if (nums_ascend_two[a - 1] < num) nums_ascend_two.push(num);
      else {
        i--;
        alert(
          "The number must be greater than the previous one 2",
          nums_ascend_two
        );
      }
    } else {
      nums_ascend_two.push(num);
    }
    
  }
}
const bigNumbers = nums_ascend_one.concat(nums_ascend_two);
const nums_ascend_big = bigNumbers.sort((a, b) => a - b);

console.log(nums_ascend_big);
console.log(nums_ascend_one);
console.log(nums_ascend_two);
