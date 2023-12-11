import { IEventLoader } from "domain/ports/event.loader";
import { BehaviorSubject, Observable, Subject, find, map, of } from "rxjs";
import { Event } from "domain/entities/event"

export class InMemoryEventLoader implements IEventLoader {

    events$$: Subject<Event[]> = new BehaviorSubject(this.events)

    constructor(private events: Event[]) {}

    all(): Observable<Event[]> {
        return this.events$$
    }

    getOne(id: number): Observable<Event> {
        return this.events$$.pipe(
            map(events => events.filter(event => event.id === id)[0])
        )
    }

}