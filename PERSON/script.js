class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new Person("Anbarasan", "K", 22, "INDIA", "CHENNAI");

console.log(person1);
