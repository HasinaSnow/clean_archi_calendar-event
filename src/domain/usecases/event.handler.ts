import { IEventLoader } from "domain/ports/event.loader";
import { Observable} from "rxjs";

export class EventHandler {

    constructor(private eventSource: IEventLoader) {}

    all(): Observable<any> {
        return this.eventSource.all()
    }
}