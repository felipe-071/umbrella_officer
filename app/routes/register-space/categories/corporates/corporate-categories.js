module.exports = (app) =>{
    app.get("/categorias-corporativo", (req, res) =>{
        res.render("pages/register-space/categories/corporates/corporate-categories");
    });
}