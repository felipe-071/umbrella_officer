module.exports = (app) =>{
    app.get('/header-adicionar-espaco', (req, res) =>{
        res.render('./partial/header-register-space')
    });
}