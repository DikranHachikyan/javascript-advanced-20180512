import {Authenticate} from './authenticate';

export class Person implements Authenticate{

    //данни на класа
    private firstName:string;
    lastName:string;
    loggedIn:boolean = false;

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
            this.loggedIn = true;
            return true;
        }

        return false;
    }

    logout():void{
        if(this.loggedIn){
            console.log(`${this.firstName} ${this.lastName} logged out` );
        }
    }

}

export class Student extends Person{

}