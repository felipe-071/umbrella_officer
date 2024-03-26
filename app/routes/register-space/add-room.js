module.exports = (app) => {
    app.get('/adicionar-sala', (req, res)=>{
        res.render('pages/register-space/add-room')
    });
}

