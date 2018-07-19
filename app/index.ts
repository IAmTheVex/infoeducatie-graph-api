import { Bootstrap, ZuuOptions, GraphQLController } from "@zuu/bootstrap";
import { Debugger, Runtime, Configuration } from '@zuu/vet';
import { Timer } from './packages/timer/Timer';
import { ListeningEventListener } from './listeners/ListeningEventListener';
import { InfoeducatieApi } from "./packages/infoeducatie/InfoeducatieApi";
import { CoreResolver } from './resolvers/CoreResolver';

Debugger.deafults();

let tag = Debugger.tag("app-index");

let options: ZuuOptions = {
    server: { port: parseInt(process.env["PORT"]) || 4100 },
    listeners: [ new ListeningEventListener ],
    graph: {
        contextFiller: async (_, headers: any): Promise<any> =>{
            return { key: headers['x-key'] || null };
        }
    },
    controllers: [ GraphQLController ],
    resolvers: [ CoreResolver ],
    cors: true
};

let timer = new Timer().reset();
Runtime.scoped(null, async _ => {
    Debugger.log(tag`Initialization began!`);
    let { app } = await Bootstrap.scope(options).run();
    return (typeof app != "undefined" && app != null);
})
.then(async result => {
    Debugger.log(tag`Initialization succeeded! Took ${timer.stop().diff()}ms!`);
})
.catch(Debugger.error);