
export class Stack<T>{
    private elements:T[];

    constructor(){
        this.elements = [];
    }

    push( el:T):void{
        this.elements.unshift(el);
    }

    pop():T{
        return this.elements.shift();
    }
}