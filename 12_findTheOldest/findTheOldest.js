const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();

    let oldestAge = people.reduce((maxAge, person) => maxAge + (((!person.yearOfDeath ? currentYear : person.yearOfDeath) - person.yearOfBirth) > maxAge ? (((!person.yearOfDeath ? currentYear : person.yearOfDeath) - person.yearOfBirth) - maxAge) : 0), 0);

    let oldestPerson = people.find((person) => ((!person.yearOfDeath ? currentYear : person.yearOfDeath) - person.yearOfBirth) === oldestAge);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
