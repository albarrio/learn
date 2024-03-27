console.log("Learn Filter, Map and Reduce methods on Javascript");

const persone = [
    {
        age: 19,
        name: "alberto",
        company: "new"
    },
    {
        age: 21,
        name: "miguel",
        company: "old"
    },
    {
        age: 33,
        name: "jhon",
        company: "start"
    }
];

// filter: get person with more of 20 years
const filterPersons = persone.filter(person => person.age >= 20);
console.log(filterPersons);

const adultPersons = persone.filter(function (value, index, array) {
    return value.age >= 20;
});
console.log(adultPersons);

// map: get name of persons
const personNames = persone.map(person => person.name);
console.log(personNames);

const names = persone.map(function (value,index,array) {
    return value.name
});
console.log(names);

// reduce: sum of ayes
const sum = persone.reduce((accumulator, item) => accumulator = accumulator + item.age, 0);
console.log(sum);

const average = persone.reduce(function (previous,current, currentI, array){
    console.log("--reduce--");
    console.log({previous});
    console.log({current});
    console.log({currentI});
    console.log({array});
    return previous = previous + current.age / array.length;
},0);
console.log(average);