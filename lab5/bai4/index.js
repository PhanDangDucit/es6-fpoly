var person = {
    firstname: "Albert",
    lastname: "Einstein",
    setFirstName: function(_firstname) { // set giá trị this.lastname= _lastname;
        this.firstname = _firstname;
    },
    setLastName: function(_lastname) { // set giá trị this.lastname= _lastname;
        this.lastname = _lastname;
        // this.firstname = _firstname;
    },
    getFullName: function () { // get giá trị this.firstname= _firstname;
        // this.firstname = _firstname;
        return this.firstname + ' ' + this.lastname;
    },
};
person.setLastName('Newton');
person.setFirstName('Issac');
console.log(person.getFullName());