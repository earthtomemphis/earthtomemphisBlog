"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var rootQuery_1 = __importDefault(require("./rootQuery"));
exports.default = new graphql_1.GraphQLSchema({
    query: rootQuery_1.default
});
