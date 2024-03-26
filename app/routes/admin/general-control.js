module.exports = (app) => {
    app.get('/controle-geral', (req, res)=>{
        res.render('admin/general-control')
    });
}

