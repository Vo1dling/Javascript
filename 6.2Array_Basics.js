let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.splice(people.indexOf("Greg"), 1);
console.log(people);

people.splice(people.indexOf("James"), 1);
console.log(people);

people.splice(0, 0, "Matt");
console.log(people);

people.splice(people.length, 0, "Omar");
console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Mary") {
      i = people.length;
    }
}

let people2 = people.slice(2);
console.log(people2);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
console.log(people);

let withBob = people + "," + "Bob";
console.log(withBob);


