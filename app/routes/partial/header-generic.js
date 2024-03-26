module.exports = (app) =>{
    app.get('/header-generico', (req, res) =>{
        res.render('./partial/header-generic')
    });
}