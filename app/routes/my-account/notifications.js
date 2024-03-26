module.exports = (app) => {
    app.get('/notificacoes', (req, res) => {
        res.render('pages/my-account/notifications')
    });
}