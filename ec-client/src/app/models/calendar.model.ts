export class Calendar {

    constructor(
        private _id: number,
        private _name: string,
        private _username: string,
        private _eventIdList: Array<number>
    ){}

    public get eventIdList(): Array<number> {
        return this._eventIdList;
    }
    public set eventIdList(value: Array<number>) {
        this._eventIdList = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}