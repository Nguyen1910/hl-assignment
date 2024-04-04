function miniMaxSum(arr) {
  let min = (max = sum = arr[0]);
  for (let i = 1; i < 5; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  return [sum - max, sum - min];
}

function main() {
  const arr = [1, 3, 5, 7, 9];
  console.log("input: [" + arr + "]\nOutput: " + miniMaxSum(arr));
}

main();
