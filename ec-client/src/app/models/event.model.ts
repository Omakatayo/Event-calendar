import { Address } from "./address.model";

export class EventItem {

    constructor(
        private _id: number,
        private _eventName: string,
        private _description: string,
        private _startDate: Date,
        private _startTime: string,
        private _endDate: Date,
        private _endTime: string,
        private _address: Address,
        private _availability: number,
        private _registered: number,
        private _price: number,
        private _category: string,
        private _organizer: string,
        private _imageURL: string
    ){}

    public get imageURL(): string {
        return this._imageURL;
    }
    public set imageURL(value: string) {
        this._imageURL = value;
    }

    public get organizer(): string {
        return this._organizer;
    }
    public set organizer(value: string) {
        this._organizer = value;
    }
    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get registered(): number {
        return this._registered;
    }
    public set registered(value: number) {
        this._registered = value;
    }
    public get availability(): number {
        return this._availability;
    }
    public set availability(value: number) {
        this._availability = value;
    }
    public get address(): Address {
        return this._address;
    }
    public set address(value: Address) {
        this._address = value;
    }
    public get endTime(): string {
        return this._endTime;
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public get endDate(): Date {
        return this._endDate;
    }
    public set endDate(value: Date) {
        this._endDate = value;
    }
    public get startTime(): string {
        return this._startTime;
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public get startDate(): Date {
        return this._startDate;
    }
    public set startDate(value: Date) {
        this._startDate = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get eventName(): string {
        return this._eventName;
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}