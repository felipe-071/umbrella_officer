module.exports = (app) => {
    app.get('/controle-de-usuarios', (req, res)=>{
        res.render('pages/admin/users-control')
    });
}

