export class Address {

    constructor(
        private _street: string,
        private _postalCode: string,
        private _city: string,
        private _country: string
    ){}

    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    public get postalCode(): string {
        return this._postalCode;
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }
}