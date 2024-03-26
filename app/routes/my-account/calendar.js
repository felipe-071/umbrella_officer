module.exports = (app) => {
    app.get('/calendario', (req, res)=>{
        res.render('pages/my-account/calendar')
    });
}

