export class Contact {
    constructor(public id:number,
                public firstName:string,
                public lastName:string,
                public email:string,
                public phone?:string,
                public created?:number){

    }
}
