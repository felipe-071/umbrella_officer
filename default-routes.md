module.exports = (app) => {
    app.get('', (req, res)=>{
        res.render('')
    });
}

const example = require('./app/routes')(app);