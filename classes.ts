interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string,  email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: '+ this.name);
    }
    register() {
        console.log(this.name + ' is registered');
    }
    payInvoice() {
        console.log(this.name + ' paid invoice');
    }
}

// let objUser = new User( 'Sachet', 'sachet.moktan2053@gmail.com', 24 );
// objUser.register();

class Member extends User {
    id: number;

    constructor(id: number, name: string,  email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    register() {
        super.payInvoice();
    }
}

let objMe: User = new Member(1, 'Sachet', 'sachet.moktan2053@gmail.com', 24 );
objMe.payInvoice();