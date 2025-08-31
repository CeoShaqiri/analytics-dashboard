import { redis } from "@/lib/redis"


type AnalyticsArgs = {
    retention?: number
}


export class Analytics{
    private retention: number = 60 *60 * 24 * 7
    constructor(opts?: AnalyticsArgs){
        //its possible in the constructor to overwrite the Analytics Args the if statement 
        // check if true the opts.retention than set to the retention
        if(opts?.retention) this.retention = opts.retention
    }
    async track(namespace:string, event: object = {}){
        const key = `analytics::${namespace}`
        // db call to persist the event
        await redis.hincrby(key,JSON.stringify(event), 1)
    }
}
 export const analytics = new Analytics()