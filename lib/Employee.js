class Employee { // todo: pass in parameters?
    constructor(name, id, email) {
        this.name = name;
        this.title = null; // todo: same as role??
        this.id = id;
        this.email = email;
        this.role = null;
    }

    getName() {
    }

    getId() {
    }

    getEmail() {
    }

    getRole()  {
    }

    printInfo() {
        for (var key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }

}
