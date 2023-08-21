const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use((req, res, next) =>{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Acess-Control-Allow-Method', 'Content-Type,Authoraization');
    next();   
})

//middleware
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use('/booking', bookingRouter);



mongoose.connect(`mongodb+srv://ukani_dhruv:M2nzOnnf15iQ2liy@movie-system.3ctooqn.mongodb.net/Movies?retryWrites=true&w=majority`);

app.listen(3500, () => {

    console.log(`Connected to localhost port ${3500}`);
})
