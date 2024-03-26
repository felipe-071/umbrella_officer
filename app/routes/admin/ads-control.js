module.exports = (app) => {
    app.get('/controle-de-anuncios', (req, res)=>{
        res.render('pages/admin/ads-control')
    });
}

