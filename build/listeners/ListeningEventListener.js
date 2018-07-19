"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("@zuu/bootstrap");
const vet_1 = require("@zuu/vet");
let tag = vet_1.Debugger.tag("listening-event-listener");
class ListeningEventListener extends vet_1.AbstractEventListener {
    constructor() {
        super(bootstrap_1.BootstrapEvents.LISTENING);
    }
    handle(event, prevent) {
        vet_1.Debugger.log(tag `App's listening on *:${event.app.get("PORT")}`);
    }
}
exports.ListeningEventListener = ListeningEventListener;
//# sourceMappingURL=ListeningEventListener.js.map