import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql'

import schema from './schemas/schema';

const app = express();

const PORT = process.env.PORT || 4000

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
    origin: (origin: any, callback: any) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    }
}
app.use(cors(corsOptions))

// Database
const MONGO_URI =
    'mongodb+srv://earthtomemphis:IloveStevie8@clusterblog.gi0bz.mongodb.net/blogDB?retryWrites=true&w=majority';
if (!MONGO_URI) {
    throw new Error(`You must provide a mongo db URI`);
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log(`Connected to MongoDB instance`))
    .on('error', (error) => console.log('Error connecting to MongoDB'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})