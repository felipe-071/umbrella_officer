module.exports = (app) => {
    app.get('/descricao-do-officing',(req,res)=>{
        res.render('pages/search-spaces/officing-description')
    });

}