interface Authenticate{
    //методи без тяло (абстрактни методи)
    login(username:string, password:string):boolean;
    logout():void;
}


class Person implements Authenticate{
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
    //
    login(username:string, password:string):boolean{
        if( username === 'john' && password === '1234'){
            return true;
        }

        return false;
    }

    logout():void{
        console.log(`${this.firstName} ${this.lastName} logged out` );
    }

}

const p:Person = new  Person('John', 'Doe');

if( p.login('john','1234') ){
    p.show(); 
}
else{
    console.log('Invalid username or password');
}

p.logout();
