module.exports = (app) => {
    app.get('/caracteristicas-do-espaco', (req, res)=>{
        res.render('pages/register-space/officing-features')
    });
}