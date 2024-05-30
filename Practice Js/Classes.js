let DATA="Secrete Information";

class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log(`${DATA}`);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA="New Data";
    }
}

let student1=new user("Krish","krishvaghela@gmail.com");
let student2=new user("Sks","sks@gmail.com");

let admin1=new admin("Jk","SSdf");