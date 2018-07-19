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
const Edition_1 = require("./Edition");
const User_1 = require("./User");
const owl_1 = require("@zuu/owl");
let Current = class Current {
};
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Current.prototype, "is_logged_in", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Current.prototype, "is_registration_open", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Current.prototype, "is_teacher", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Current.prototype, "is_contestant", void 0);
__decorate([
    owl_1.Field(type => Edition_1.Edition, { nullable: true }),
    __metadata("design:type", Edition_1.Edition)
], Current.prototype, "last_edition_with_results", void 0);
__decorate([
    owl_1.Field(type => Edition_1.Edition, { nullable: true }),
    __metadata("design:type", Edition_1.Edition)
], Current.prototype, "edition", void 0);
__decorate([
    owl_1.Field(type => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], Current.prototype, "user", void 0);
Current = __decorate([
    owl_1.ObjectType()
], Current);
exports.Current = Current;
;
//# sourceMappingURL=Current.js.map