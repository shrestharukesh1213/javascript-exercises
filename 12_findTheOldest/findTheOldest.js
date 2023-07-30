const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const ageFinder = function (death, birth) {
  if (!death) {
    const date = new Date().getFullYear();
    death = date;
  }
  return death - birth;
};

const findTheOldest = function (array) {
  const oldPerson = array.reduce((oldest, currentPerson) => {
    const oldestAge = ageFinder(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = ageFinder(
      currentPerson.yearOfDeath,
      currentPerson.yearOfBirth
    );
    return currentAge < oldestAge ? oldest : currentPerson;
  });
  return oldPerson;
};
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
