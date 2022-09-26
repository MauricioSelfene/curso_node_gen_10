const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const { routes: {UserRouter} } = require('./network')

const app = express();
const PORT = process.env.PORT;

//Articles: price, images, descripcion, name
//Users: name, email, articles[]

app.use(express.json())
app.use(morgan('dev'))
app.use( UserRouter )



const fooMiddleware = (req, res, next) => {
    console.log('req.foo', req.foo)
    req.foo = 'bar'
    next()
}

app.get(
    '/', 
    fooMiddleware,
    (req, res) => {
        console.log('req.foo', req.foo)
        res.send({
            message: 'Hola mundo desde express',
            foo: req.foo
        })
})


app.post(
    '/', 
    (req, res) => {
        console.log('req.foo', req.foo)
        res.send({
            message: 'Hola mundo desde express',
            foo: req.foo
        })
})


app.use((error, req, res, next) => {
    response({
        message: 'This toute does not existes',
        res,
        status: 404
    })
})


app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
});