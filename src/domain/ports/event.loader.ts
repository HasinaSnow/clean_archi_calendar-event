import { Event } from "domain/entities/event";
import { Observable } from "rxjs";

export interface IEventLoader {
    all(): Observable<Event[]>
    getOne(id: number): Observable<Event>;
}