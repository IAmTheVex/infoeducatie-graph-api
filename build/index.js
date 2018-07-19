"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@zuu/bootstrap");
const vet_1 = require("@zuu/vet");
const Timer_1 = require("./packages/timer/Timer");
const ListeningEventListener_1 = require("./listeners/ListeningEventListener");
const CoreResolver_1 = require("./resolvers/CoreResolver");
vet_1.Debugger.deafults();
let tag = vet_1.Debugger.tag("app-index");
let options = {
    server: { port: parseInt(process.env["PORT"]) || 4100 },
    listeners: [new ListeningEventListener_1.ListeningEventListener],
    graph: {
        contextFiller: (_, headers) => __awaiter(this, void 0, void 0, function* () {
            return { key: headers['x-key'] || null };
        })
    },
    controllers: [bootstrap_1.GraphQLController],
    resolvers: [CoreResolver_1.CoreResolver],
    cors: true
};
let timer = new Timer_1.Timer().reset();
vet_1.Runtime.scoped(null, (_) => __awaiter(this, void 0, void 0, function* () {
    vet_1.Debugger.log(tag `Initialization began!`);
    let { app } = yield bootstrap_1.Bootstrap.scope(options).run();
    return (typeof app != "undefined" && app != null);
}))
    .then((result) => __awaiter(this, void 0, void 0, function* () {
    vet_1.Debugger.log(tag `Initialization succeeded! Took ${timer.stop().diff()}ms!`);
}))
    .catch(vet_1.Debugger.error);
//# sourceMappingURL=index.js.map