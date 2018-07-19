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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const owl_1 = require("@zuu/owl");
const vet_1 = require("@zuu/vet");
const InfoeducatieApi_1 = require("../packages/infoeducatie/InfoeducatieApi");
const Current_1 = require("../packages/infoeducatie/types/Current");
const Edition_1 = require("../packages/infoeducatie/types/Edition");
const Talk_1 = require("../packages/infoeducatie/types/Talk");
const News_1 = require("../packages/infoeducatie/types/News");
const Alumni_1 = require("../packages/infoeducatie/types/Alumni");
let CoreResolver = class CoreResolver {
    now(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.authorize(key).getCurrent();
        });
    }
    talks(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.authorize(key).getTalks();
        });
    }
    editions(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.authorize(key).getEditions();
        });
    }
    news(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.authorize(key).getNews();
        });
    }
    alumni(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.authorize(key).getAlumnis();
        });
    }
};
__decorate([
    vet_1.Inject,
    __metadata("design:type", InfoeducatieApi_1.InfoeducatieApi)
], CoreResolver.prototype, "api", void 0);
__decorate([
    owl_1.Query(returns => Current_1.Current, { nullable: true }),
    __param(0, owl_1.Ctx("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoreResolver.prototype, "now", null);
__decorate([
    owl_1.Query(returns => [Talk_1.Talk], { nullable: true }),
    __param(0, owl_1.Ctx("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoreResolver.prototype, "talks", null);
__decorate([
    owl_1.Query(returns => [Edition_1.Edition], { nullable: true }),
    __param(0, owl_1.Ctx("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoreResolver.prototype, "editions", null);
__decorate([
    owl_1.Query(returns => [News_1.News], { nullable: true }),
    __param(0, owl_1.Ctx("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoreResolver.prototype, "news", null);
__decorate([
    owl_1.Query(returns => [Alumni_1.Alumni], { nullable: true }),
    __param(0, owl_1.Ctx("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoreResolver.prototype, "alumni", null);
CoreResolver = __decorate([
    owl_1.Resolver()
], CoreResolver);
exports.CoreResolver = CoreResolver;
//# sourceMappingURL=CoreResolver.js.map