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
let Edition = class Edition {
};
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], Edition.prototype, "id", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], Edition.prototype, "year", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "name", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "camp_start_date", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "camp_end_date", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "motto", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "registration_start_date", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "registration_end_date", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "travel_data_deadline", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Edition.prototype, "published", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "created_at", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "updated_at", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Edition.prototype, "current", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "projects_forum_category", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], Edition.prototype, "talks_count", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Edition.prototype, "talks_forum_category", void 0);
__decorate([
    owl_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Edition.prototype, "show_results", void 0);
Edition = __decorate([
    owl_1.ObjectType()
], Edition);
exports.Edition = Edition;
;
//# sourceMappingURL=Edition.js.map