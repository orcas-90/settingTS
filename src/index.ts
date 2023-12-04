let userWord: string | null = prompt('введите слово');

let result: boolean = true;
if (typeof userWord === 'string') {
  let numbers: string[] = Array.from(userWord);

  for (
    let i = 0, j = numbers.length - 1;
    i < numbers.length, j >= 0;
    i += 1, j -= 1
  ) {
    if (numbers[i] === numbers[j]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
}
console.log(result);
