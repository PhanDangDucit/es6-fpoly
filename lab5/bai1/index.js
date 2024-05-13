class Animal {
    constructor(firstName) {
        this.firstName = firstName;
    }
    readName(lastName) {
        console.log(this.firstName + ' ' + lastName);
    }
}

const user = new Animal("Duc");
user.readName("phan");