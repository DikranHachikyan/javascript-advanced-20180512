export interface Authenticate{
    loggedIn:boolean;
    //методи без тяло (абстрактни методи)
    login(username:string, password:string):boolean;
    logout():void;
}
