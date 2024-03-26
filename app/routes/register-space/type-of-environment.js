module.exports = (app) =>{
    app.get('/tipo-de-ambiente', (req, res)=>{
        res.render('pages/register-space/type-of-environment')
    });
}
