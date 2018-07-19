"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    reset() {
        this.start = Date.now();
        this.end = -1;
        return this;
    }
    stop() {
        this.end = Date.now();
        return this;
    }
    diff() {
        return this.end - this.start;
    }
}
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map