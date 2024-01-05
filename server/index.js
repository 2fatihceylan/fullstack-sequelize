const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(express.json());
app.use(cors());

require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const db = require('./models');



//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);


//Comments
const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);


//Users
const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);





db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log('Server started.....');
    })    
})



