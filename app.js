const express = require('express')
const mongoose = require('mongoose')

const app = express()

//mongodb+srv://rest-api-123:<password>@cluster0.dvhq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//first we connect mongodb with our application

mongoose.connect('mongodb+srv://rest-api-123:OstDkhhQbhq1NYzr@cluster0.dvhq8.mongodb.net' , 
{
    dbName: 'RestApi',
    user: 'rest-api-123',
    pass: 'OstDkhhQbhq1NYzr',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Mongodb connected');
})

// import all the routes to the entry file

const ProductRoute = require('./Routes/Product.route');
const CategoryRoute = require('./Routes/Category.route');
app.use(express.json({
    extended: true
}))

app.use('/products', ProductRoute);

app.use('/categories', CategoryRoute);

app.use((req, res, next) => {
    const err = new Error ('Not Found')
    err.status = 404
    next(err)
});

//error handler

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message 
        }
    })
})

app.listen(5000, () => {
    console.log('server started on port 5000...')
})