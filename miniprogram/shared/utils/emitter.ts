/** 事件管理器 */

type EmitterCallback = MyApp.fn

interface EventItem {
    fn: MyApp.fn
    ctx?: any
}

type EventMap<Types extends string = string> = Record<Types, EventItem[]>

export class Emitter<Types extends string = string>{
    private e = {} as EventMap<Types>

    static create<T extends string>() {
        return new Emitter<T>()
    }

    on(name: Types, callback: EmitterCallback, ctx?: any): Emitter {
        (this.e[name] || (this.e[name] = [])).push({
            fn: callback,
            ctx
        })

        return this
    }

    emit(name: Types, ...args: any[]): Emitter {
        const evtArr = (this.e[name] || []).slice()

        for (let i = 0; i < evtArr.length; i++) {
            evtArr[i].fn.apply(evtArr[i].ctx, args)
        }

        return this
    }


    off(name?: Types, callback?: EmitterCallback): Emitter {
        // off all

        if (!name) {
            this.e = {} as EventMap<Types>
            return this
        }

        const events = this.e[name]
        const liveEvents: EventItem[] = []

        if (events && callback) {
            for (let i = 0; i < events.length; i++) {
                if (events[i].fn !== callback && (events[i].fn as any)._ !== callback) {
                    liveEvents.push(events[i])
                }
            }
        }

        (liveEvents.length) ? this.e[name] = liveEvents : delete this.e[name]

        return this
    }


}