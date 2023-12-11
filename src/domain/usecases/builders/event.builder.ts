import { Event } from "../../entities/event"

export class EventBuilder {
    protected id: number
    protected date: Date
    protected type: string
    protected client: string
    protected confirm: boolean

    withId(id: number): EventBuilder {
        this.id = id
        return this
    }

    withDate(date: Date): EventBuilder {
        this.date = date
        return this
    }

    withType(type: string): EventBuilder {
        this.type = type
         return this
    }

    withClient(client: string): EventBuilder {
        this.client = client
        return this
    }
    
    withConfirm(): EventBuilder {
        this.confirm = true
        return this
    }

    withNotConfirm(): EventBuilder {
        this.confirm = false
        return this
    }

    build(): Event {
        return new Event(
            this.id,
            this.date,
            this.type,
            this.client,
            this.confirm
        )
    }
}

export class StubEventBuilder extends EventBuilder {

    protected override id: number = 0
    protected override date: Date = new Date()
    protected override type: string = 'Mariage'
    protected override client: string = 'Client 1'
    protected override confirm: boolean = true

}