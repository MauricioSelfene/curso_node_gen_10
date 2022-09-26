const express = require('express');
const morgan = require('morgan');
const { UserRouter } = require('./routes')

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


app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
});