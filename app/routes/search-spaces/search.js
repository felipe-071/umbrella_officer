module.exports = (app) => {
    app.get('/encontrar-espacos',(req,res)=>{
        res.render('pages/search-spaces/search')
    });

}