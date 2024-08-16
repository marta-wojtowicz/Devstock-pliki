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

function arrayWithNickname(people) {
  return people.map(person => {
    const {firstName, lastName} = person;
    if (
      typeof firstName === 'string' && firstName.trim().length >= 3 && 
      typeof lastName === 'string' && lastName.trim().length >= 3) {
        const letterFromFirstName = firstName.slice(-3).split('').reverse().join('');
        const letterFromLastName = lastName.slice(0,3);
        const changeletterFromLastName = letterFromLastName[2] + letterFromLastName[1] + letterFromLastName[0];
        const nickname = letterFromFirstName.toLocaleLowerCase() + changeletterFromLastName.toLocaleLowerCase();
        const nicknameAfterEdit = nickname.charAt(0).toLocaleUpperCase() + nickname.slice(1);
        return {
          ...person,
          nickname: nicknameAfterEdit,
        }
  } else {
    return person;
  }
});
}

console.log(arrayWithNickname(people));