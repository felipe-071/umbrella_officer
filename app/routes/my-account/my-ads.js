module.exports = (app) => {
    app.get('/meus-anuncios', (req, res)=>{
        res.render('pages/my-account/my-ads')
    });
}

