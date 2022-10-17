import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

//* Configure .env to load in environment variables
dotenv.config();

//* get access to mongo client
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8001;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        connectTimeoutMS: 2500,
        useNewUrlParser: true
    },
).catch(err => {
    console.error(err.stack);
    process.exit(1);
}).then(async client => {
    app.listen(port, (`Listening on port: ${port}`));    //* Starting the server after successful database connectivity
});