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
Object.defineProperty(exports, "__esModule", { value: true });
const owl_1 = require("@zuu/owl");
const AlumniUser_1 = require("./AlumniUser");
let Alumni = class Alumni {
};
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Alumni.prototype, "description", void 0);
__decorate([
    owl_1.Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], Alumni.prototype, "editions", void 0);
__decorate([
    owl_1.Field(type => AlumniUser_1.AlumniUser, { nullable: true }),
    __metadata("design:type", AlumniUser_1.AlumniUser)
], Alumni.prototype, "user", void 0);
Alumni = __decorate([
    owl_1.ObjectType()
], Alumni);
exports.Alumni = Alumni;
;
//# sourceMappingURL=Alumni.js.map