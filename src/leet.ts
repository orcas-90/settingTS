const details: string[] = [
    '7868190130M7522',
    '5303914400F9211',
    '9273338290F4010',
  ];
  let countOlder = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < details.length; i++) {
    const agePassagenrs: number = Number(details[i][11] + details[i][12]);

    if (agePassagenrs > 60) {
      // eslint-disable-next-line no-plusplus
      countOlder++;
    }
  }
  console.log(countOlder);