import { IEventLoader } from "../domain/ports/event.loader"
import { EventHandler } from "../domain/usecases/event.handler"
import { InMemoryEventLoader } from "../adapters/secondaries/inmemory/in-memory-event.loader"
import { Event } from "../domain/entities/event"

describe('Event handler fetches a list', () => {
    let mariage: Event

    // avant chaque teste
    beforeEach(() => {
        mariage = new Event('mariage')
    })

    describe('A list', () => {

        it('with zero event if there is no event in the source', (done) => {
            const eventHandler: EventHandler = createEventHandler([])
            eventHandler.all().subscribe(event => {
                expect(event).toEqual([])
                done()
            })
        })
    
        it('with one event if there is one event in the source', (done) => {
            const eventHandler: EventHandler = createEventHandler([mariage])
            eventHandler.all().subscribe(event => {
                expect(event).toEqual([mariage])
                done()
            })
        })

        it('with two event if there is two event in the source', (done) => {
            const reunion: Event = new Event('réunion')
            const eventHandler: EventHandler = createEventHandler([mariage, reunion])
            eventHandler.all().subscribe(event => {
                expect(event).toEqual([mariage, reunion])
                done()
            })
        })
    })

    describe('A detail of one event', () => {

        it('with type', (done) => {

        })
    })

    function createEventHandler(events: Event[]) {
        const eventSource: IEventLoader = new InMemoryEventLoader(events)
        return new EventHandler(eventSource)
    }
})