
class User{
    //данни на класа
    private firstName:string;
    lastName:string;

    //конструктор
    constructor(fname:string, lname:string){
        this.firstName = fname;
        this.lastName = lname;
    }

    //методи
    //public show():void{
    show():void{
        console.log(`${this.firstName} ${this.lastName}`);
    }

}

//
const user:User = new User('John','Doe');

//private
//user.firstName = 'Anna';
user.lastName = 'Anders';
user.show(); 
