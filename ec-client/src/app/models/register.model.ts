export class Register {


    constructor(
        private _registerId: number,
        private _registerEventId: number,
        private _username: string
    ){}

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get registerEventId(): number {
        return this._registerEventId;
    }
    public set registerEventId(value: number) {
        this._registerEventId = value;
    }
    public get registerId(): number {
        return this._registerId;
    }
    public set registerId(value: number) {
        this._registerId = value;
    }
}