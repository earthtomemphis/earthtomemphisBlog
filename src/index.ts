import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/earthtomemphis');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('Database connected');
});

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const posts = [
	{
		name: 'Post 1',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe id, aspernatur suscipit commodi placeat. Cumque et nobis est doloribus dolores laudantium, quisquam magnam maiores quidem cupiditate sed minus quam?',
		img: 'https://picsum.photos/id/6/200/300',
	},
	{
		name: 'Post 2',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe id, aspernatur suscipit commodi placeat. Cumque et nobis est doloribus dolores laudantium, quisquam magnam maiores quidem cupiditate sed minus quam?',
		img: 'https://picsum.photos/id/6/200/300',
	},
	{
		name: 'Post 3',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe id, aspernatur suscipit commodi placeat. Cumque et nobis est doloribus dolores laudantium, quisquam magnam maiores quidem cupiditate sed minus quam?',
		img: 'https://picsum.photos/id/6/200/300',
	},
	{
		name: 'Post 4',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe id, aspernatur suscipit commodi placeat. Cumque et nobis est doloribus dolores laudantium, quisquam magnam maiores quidem cupiditate sed minus quam?',
		img: 'https://picsum.photos/id/6/200/300',
	},
];

app.get('/', (req: Request, res: Response) => {
	res.redirect('/posts');
});

app.get('/posts', (req: Request, res: Response) => {
	res.render('posts/index', { posts });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
