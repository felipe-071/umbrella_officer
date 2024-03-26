module.exports = (app) =>{
    app.get("/categorias-espacos-corporativos", (req, res) =>{
        res.render("pages/register-space/categories/corporates/corporate-categories");
    });
}