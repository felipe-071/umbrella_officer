module.exports = (app) => {
    app.get('/localizacao', (req, res) =>{
        res.render('pages/register-space/localization')
    })
}