import { Observable } from "rxjs";

export interface IEventLoader {
    all(): Observable<any>
}