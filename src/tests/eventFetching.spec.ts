import { IEventLoader } from "../domain/ports/event.loader"
import { EventHandler } from "../domain/usecases/event.handler"
import { InMemoryEventLoader } from "../adapters/secondaries/inmemory/in-memory-event.loader"
import { Event } from "../domain/entities/event"
import { StubEventBuilder } from "../domain/usecases/builders/event.builder"

describe('Event handler fetches', () => {
    let mariage: Event
    let reunion: Event

    // avant chaque teste
    beforeEach(() => {
        mariage = new StubEventBuilder()
            .withId(1)
            .withType('Mariage')
            .build()
        reunion = new StubEventBuilder()
            .withId(2)
            .withType('Réunion')
            .build()
    })

    describe('A list', () => {

        it('with zero event if there is no event in the source', (done) => {
            const eventHandler: EventHandler = createEventHandler([])
            eventHandler.all().subscribe(events => {
                verifyEventList(events, [])
                done()
            })
        })
    
        it('with one event if there is one event in the source', (done) => {
            const eventHandler: EventHandler = createEventHandler([mariage])
            eventHandler.all().subscribe(events => {
                verifyEventList(events, [mariage])
                done()
            })
        })

        it('with two event if there is two event in the source', (done) => {
            const eventHandler: EventHandler = createEventHandler([mariage, reunion])
            eventHandler.all().subscribe(events => {
                verifyEventList(events, [mariage, reunion])
                done()
            })
        })
    })

    it('A detail of one event retrieved', (done) => {
        const eventHandler: EventHandler = createEventHandler([mariage, reunion])
        eventHandler.getOne(2).subscribe(event => {
            verifyEventDetail(event, reunion)
            done()
        })
    })

    function createEventHandler(events: Event[]) {
        const eventSource: IEventLoader = new InMemoryEventLoader(events)
        return new EventHandler(eventSource)
    }

    function verifyEventList(eventList: Event[], expectedEventList: Event[]) {
        expect(eventList).toEqual(expectedEventList)
    }

    function verifyEventDetail(event: Event, expectedEvent) {
        expect(event).toEqual(expectedEvent)
        expect(event.id).toEqual(expectedEvent.id)
        expect(event.date).toEqual(expectedEvent.date)
        expect(event.type).toEqual(expectedEvent.type)
        expect(event.client).toEqual(expectedEvent.client)
        expect(event.confirm).toEqual(expectedEvent.confirm)
    }
})