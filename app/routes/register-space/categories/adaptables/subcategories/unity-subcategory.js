module.exports = (app) => {
    app.get('/subcategoria-unidade', (req, res)=> {
        res.render('pages/register-space/categories/adaptables/subcategories/unity-subcategory');
    });
}