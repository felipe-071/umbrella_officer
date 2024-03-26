module.exports = (app) => {
    app.get('/editar-anuncio', (req, res)=>{
        res.render('pages/my-account/edit-ad')
    });
}

