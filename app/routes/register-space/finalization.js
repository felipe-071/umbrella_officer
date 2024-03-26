module.exports = (app) => {
    app.get('/finalizacao-do-anuncio', (req, res) => {
        res.render('pages/register-space/finalization')
    });
}