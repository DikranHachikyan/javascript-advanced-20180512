import {Authenticate} from './authenticate';

export class Service implements Authenticate{
    loggedIn:boolean = false;

    login( username:string,password:string):boolean{
        if(username === 'mongo' && password === '12345'){
            this.loggedIn = true;
            return true;
        }
        return false;
    }

    logout():void{
        if( this.loggedIn ){
            console.log(`service logout`);
        }
    }
}
