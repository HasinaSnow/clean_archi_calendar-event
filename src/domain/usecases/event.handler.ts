import { Event } from "domain/entities/event";
import { IEventLoader } from "domain/ports/event.loader";
import { Observable} from "rxjs";

export class EventHandler {

    constructor(private eventSource: IEventLoader) {}

    all(): Observable<Event[]> {
        return this.eventSource.all()
    }

    getOne(id: number): Observable<Event> {
        return this.eventSource.getOne(id)
    }
}