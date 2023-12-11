export class Event {

    constructor(
        private _id: number,
        private _date: Date,
        private _type: string,
        private _client: string,
        private _confirm: boolean
    ) {}

    public get id(): number {
        return this._id
    }

    public get date(): Date {
        return this._date
    }

    public get confirm(): boolean {
        return this._confirm;
    }

    public get client(): string {
        return this._client;
    }

    public get type(): string {
        return this._type;
    }
}