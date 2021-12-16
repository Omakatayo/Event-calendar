export class User {

    constructor(
        private _id: string,
        private _username: string,
        // private _password: string,
        private _email: string,
        // private _phoneNumber: string,
        private _accountType: string
    ){}

    public get accountType(): string {
        return this._accountType;
    }
    public set accountType(value: string) {
        this._accountType = value;
    }
    // public get phoneNumber(): string {
    //     return this._phoneNumber;
    // }
    // public set phoneNumber(value: string) {
    //     this._phoneNumber = value;
    // }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    // public get password(): string {
    //     return this._password;
    // }
    // public set password(value: string) {
    //     this._password = value;
    // }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}