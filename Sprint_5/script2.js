const people = [
    { 
      firstName: false,
      lastName: 2, 
    },
    { 
      firstName: "Roman", 
      lastName: "Kowalski", 
      nickname: "Namwok", 
    },
    { 
      firstName: "Halina",
      lastName: "Malina", 
      nickname: "Anilam", 
    },
    { 
      firstName: "B", 
      lastName: "22", 
    },
    { 
      firstName: "Jan",
      lastName: "Nowak",
      nickname: "Najwon",
    },
    {
      firstName: "Kamil",
      lastName: null, 
    },
  ];

  const peopleWithFilter = (people) => people
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

  console.log(peopleWithFilter(people))