module.exports = (app) =>{
    app.get('/fotos', (req,res) =>{
        res.render('pages/register-space/photos')
    });
}