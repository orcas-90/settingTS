function isClosed(symbols: string): boolean {
  let stack = [];
  type ClosingBrackets = ')'| ']'| '}'
  const close: ClosingBrackets[] = [')', ']', '}'];
  function symbolIsCloseBrackets(symbol:string): symbol is ClosingBrackets {
      return close.includes(symbol as unknown as ClosingBrackets)
  }
  const allСharacters = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const arraySymbol = symbols.split('');

  for (let i = 0; i < arraySymbol.length; i++) {
    const curentSymbol = arraySymbol[i];

    if (symbolIsCloseBrackets(curentSymbol)) {
      if (allСharacters[curentSymbol] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(arraySymbol[i]);
    }
  }
  return stack.length === 0 ? true : false;
}

let symbols: string = '({)}';

if (isClosed(symbols)) {
  alert('скобки закрыты корректно!');
} else {
  alert('Ошибка вложености');
}
