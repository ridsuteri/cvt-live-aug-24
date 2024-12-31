import express from 'express';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import { MongoClient } from 'mongodb';

const connectionString = 'mongodb://localhost:27017/riddhi-test';
const client = new MongoClient(connectionString);

const app = express();
const port = 3000;
let connection;
(async () => {
  try {
    connection = await client.connect();
    console.log('db connected successfully!');
  } catch (e) {
    console.error('Error connecting to database:', e);
  }
})();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
