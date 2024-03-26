module.exports = (app) => {
    app.get('/favoritos', (req, res)=>{
        res.render('pages/my-account/favorites')
    });
}