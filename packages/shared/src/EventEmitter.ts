export default class EventEmitter {
    events: any
    constructor() {
        this.events = {};
    }

    emit(eventName: string, ...args: any[]) {
        const event = this.events[eventName];
        if (!event) console.error('暂无此事件！')
        event.apply(null, args)
    }

    on(eventName: string, fn: any) {
        this.events[eventName] = fn;
    }
}