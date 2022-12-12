export class UserLogin{
    constructor(public login: string, public password: string){}

}

/* export class UserRegister{
    constructor(public name: string, public login: string, public password: string, public number : string, public email : string,
         public region : string){}

} */
export class UserRegister{
    public name: string;
    public login: string;
    public password: string;
    public number : string; 
    public email : string;
    public region : string;
    }