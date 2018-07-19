"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vet_1 = require("@zuu/vet");
const fetch = require("node-fetch");
class InfoeducatieApi {
    constructor() {
        this.auth = null;
    }
    authorize(key) {
        this.auth = key;
        return this;
    }
    deauthorize() {
        this.auth = null;
        return this;
    }
    reach(route, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.auth != null)
                headers['Authorization'] = this.auth;
            let response = yield fetch(this.apiConfig.endpoint + route, { headers });
            return yield response.json();
        });
    }
    getCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reach(this.apiConfig.current);
        });
    }
    getTalks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reach(this.apiConfig.talks);
        });
    }
    getEditions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reach(this.apiConfig.editions);
        });
    }
    getNews() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reach(this.apiConfig.news);
        });
    }
    getAlumnis() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.reach(this.apiConfig.alumni);
            for (let i = 0; i < result.length; i++) {
                if (result[i].user.job != null && typeof result[i].user.job != 'undefined' && result[i].user.job.trim() == '')
                    result[i].user.job = null;
                result[i].editions = result[i].editions.map(x => x.name);
            }
            return result;
        });
    }
}
__decorate([
    vet_1.Configuration("api", false),
    __metadata("design:type", Object)
], InfoeducatieApi.prototype, "apiConfig", void 0);
exports.InfoeducatieApi = InfoeducatieApi;
//# sourceMappingURL=InfoeducatieApi.js.map