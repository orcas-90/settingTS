
    const answers: string[] = [];
    let text: string = 'введите город';

    while (true) {
      console.log(answers);

      let answer = prompt(text);

      for (let i = 0; i < answers.length; i++) {
        if (answers[i] === answer) {
          answer = null;
        }
      }

      if (answer === null) {
        break;
      }

      if (answers.length === 0) {
        answers.push(answer);
        continue;
      }

      const lastword: string = answers[answers.length - 1];
      if (lastword[lastword.length - 1] === answer[0]) {
        text = 'введите город';
        answers.push(answer);
      } else {
        text = 'введите  другой город';
        continue;
      }
    }
