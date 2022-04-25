"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var Post_1 = __importDefault(require("../models/Post"));
var PostType_1 = __importDefault(require("./PostType"));
var RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: function () { return ({
        posts: {
            type: new graphql_1.GraphQLList(PostType_1.default),
            resolve: function () {
                return Post_1.default.find({});
            }
        },
        post: {
            type: PostType_1.default,
            id: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
            resolve: function (parentValue, _a) {
                var id = _a.id;
                return Post_1.default.findById(id);
            }
        }
    }); }
});
exports.default = RootQuery;
