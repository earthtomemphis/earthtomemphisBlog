"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var express_graphql_1 = require("express-graphql");
var schema_1 = __importDefault(require("./schemas/schema"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
// Middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({ schema: schema_1.default, graphiql: true }));
var whitelist = ['http://localhost:3000', 'http://localhost:3001'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use((0, cors_1.default)(corsOptions));
// Database
var MONGO_URI = 'mongodb+srv://earthtomemphis:IloveStevie8@clusterblog.gi0bz.mongodb.net/blogDB?retryWrites=true&w=majority';
if (!MONGO_URI) {
    throw new Error("You must provide a mongo db URI");
}
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(MONGO_URI);
mongoose_1.default.connection
    .once('open', function () { return console.log("Connected to MongoDB instance"); })
    .on('error', function (error) { return console.log('Error connecting to MongoDB'); });
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
