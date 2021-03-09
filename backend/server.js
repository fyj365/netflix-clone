const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
//connect to MongoDB
mongoose.connect(process.env.DB_CONNECT,
                    {useNewUrlParser: true},
                    () => console.log('connected to My Mongo db!')
);
//define the port
const port = process.env.PORT || 5000;

//MiddleWare
app.use(express.json());
app.use(cors());
//import routes
const authRoute = require('./routes/auth');
const posts = require('./routes/posts');
const users = require('./routes/users');
//routes Middleware
app.use('/api/user', authRoute);
app.use('/api', posts);
app.use('/', users);
app.listen(port, () => console.log(`server up and running on port: ${port}`)); 