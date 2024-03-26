const apartmentSubcategory = require("./subcategories/apartment-subcategory");

module.exports = (app) =>{
    app.get('/categorias-de-espacos-adaptaveis', (req, res) => {
        res.render('pages/register-space/categories/adaptables/adaptables-categories');
    })
}


