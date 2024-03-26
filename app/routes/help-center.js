module.exports = (app) =>{
    app.get('/central-de-ajuda', (req,res) =>{
        res.render('pages/help-center')
    })
}