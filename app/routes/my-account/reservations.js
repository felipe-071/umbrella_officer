module.exports = (app) => {
    app.get('/minhas-reservas', (req, res)=>{
        res.render('pages/my-account/my-reservations')
    });
}