module.exports = (app) => {
    app.get('/perfil', (req, res)=>{
        res.render('pages/my-account/my-profile-public')
    });
}