module.exports = (app) =>{
    app.get('/finalizacao-da-reserva', (req, res) =>{
        res.render("pages/search-spaces/booking-finalization")
    })
}