function Person(name, age){
    this.name = name;
    this.age = age;

    this.PersonsInfo = () =>{
        return `This person is ${this.age} years old. This person's name is ${this.name}.`
    }

    this.ageIncrement = () =>{
        let current = this.age
        this.age += 1
        return `This person's age was previously ${current} years old. As of the call of this method, they are now ${this.age} years old.`
    }
}

Jason = new Person("Jason", 56)
result = Jason.PersonsInfo()
console.log(result)
console.log(Jason.ageIncrement())
console.log(Jason.ageIncrement())