const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

const arrayWithNickname = (people) => people
  .map(person => {
    const {firstName, lastName} = person;
    if (
      typeof firstName === 'string' && firstName.trim().length >= 3 && 
      typeof lastName === 'string' && lastName.trim().length >= 3) {
        const letterFromFirstName = firstName.slice(-3).split('').reverse().join('').toLowerCase();
        const letterFromLastName = lastName.slice(0,3).split('').reverse().join('').toLowerCase();
        const nicknameBeforeEdit = `${letterFromFirstName}${letterFromLastName}`
        const nickname = nicknameBeforeEdit.charAt(0).toUpperCase() + nicknameBeforeEdit.slice(1);
        return {
          ...person,
          nickname
        }
  } else {
    return person;
  }
});

const firstTask = arrayWithNickname(people);
console.log('Zadanie 1:', firstTask);

const peopleWithFilter = (firstTask) => firstTask
  .filter((person) => person.nickname)
  .map((person, index) => {
    const nameLength = person.firstName.length + person.lastName.length;
    const age = nameLength % 2 === 0 
    ? nameLength 
    : Math.ceil(
        Object.keys(person)
        .reduce((sum, key) => sum + key.length, 0) / (index === 0 ? 1 : index)
        );

    return {
        ...person,
        age,
    };
    }
  );

const secendTask = peopleWithFilter(firstTask);
console.log('Zadanie 2:', secendTask);

const mostCommonLetters = (secendTask) => secendTask
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

const thirdTask = mostCommonLetters(secendTask)
console.log('zadanie 3:', thirdTask);