module.exports = (app) => {
    app.get('/solicitacoes-de-reservas', (req, res)=>{
        res.render('pages/my-account/booking-requests')
    });
}

