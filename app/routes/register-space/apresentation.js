module.exports = (app) => {
    app.get('/apresentacao', (req, res)=> {
        res.render('pages/register-space/apresentation')
    });
}