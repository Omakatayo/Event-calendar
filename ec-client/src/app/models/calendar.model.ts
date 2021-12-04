export class Calendar {

    constructor(
        private _calendarId: number,
        private _calendarName: string,
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
    public get calendarName(): string {
        return this._calendarName;
    }
    public set calendarName(value: string) {
        this._calendarName = value;
    }
    public get calendarId(): number {
        return this._calendarId;
    }
    public set calendarId(value: number) {
        this._calendarId = value;
    }
}