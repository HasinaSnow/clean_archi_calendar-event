import { IEventLoader } from "domain/ports/event.loader";
import { BehaviorSubject, Observable, Subject, of } from "rxjs";
import { Event } from "domain/entities/event"

export class InMemoryEventLoader implements IEventLoader {

    events$$: Subject<Event[]> = new BehaviorSubject(this.events)

    constructor(private events: Event[]) {}

    all(): Observable<any> {
        return this.events$$
    }

}