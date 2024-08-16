const people = [
    {
      firstName: "Roman",
      lastName: "Kowalski",
      nickname: "Namwok",
      age: 25,
    },
    {
      firstName: "Halina",
      lastName: "Malina",
      nickname: "Anilam",
      age: 12,
    },
    { 
      firstName: "Jan",
      lastName: "Nowak",
      nickname: "Najwon",
      age: 8 
    },
  ];

  const mostCommonLetters = (people) => people
  .map((person) => {
    const allLetters = (person.firstName + person.lastName + person.nickname).toLowerCase();
    const letterCounter = {};

    for(let letter of allLetters) {
      letterCounter[letter] = (letterCounter[letter] || 0) + 1;
    }
    const letterSorter = Object.entries(letterCounter)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const commonLetter = letterSorter[0];

    return {
      ... person,
      mostCommonLetter: {letter: commonLetter[0], count: commonLetter[1]}
    }
  }
  );

console.log(mostCommonLetters(people));