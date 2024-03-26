function UsersDAO(connection) {
    this._connection = connection;
}

UsersDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from sala', callback);
}
UsersDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query(`select * from sala`, callback);
}

UsersDAO.prototype.registerUser = function (noticia, callback) {
    this._connection.query('INSERT INTO usuarios SET  ?',noticia,callback)
}

UsersDAO.prototype.get5UltimasNoticias = function (noticia, callback) {
    this._connection.query('select * from teste', noticia, callback);
}

UsersDAO.prototype.login = function (user, callback) {
    this._connection.query(`SELECT * FROM usuarios WHERE email_user = ? or cpf_user = ?`, [user.userId, user.userId], callback);
}

UsersDAO.prototype.findUserInformations = function (user, callback) {
    this._connection.query(`SELECT * FROM usuarios where cpf_user = ` + user, callback);
}

UsersDAO.prototype.uploadImage = function(user, callBack){
    this._connection.query(`UPDATE usuarios SET fotos_user = ?  where cpf_user = ?`, [user.fotos_user, user.cpf_user], callBack)
}

UsersDAO.prototype.registerProfile= function (user, callback) {
    this._connection.query(`UPDATE usuarios SET sobre_mim = ?,  perfil_profissional = ?, link_instagram = ?,  link_whats_user = ?,
    link_facebook = ?, link_linkedin = ?, preferencias_homeoffincing = ?, preferencias_coworking = ? where cpf_user = ? `, [user.sobre_mim, user.perfil_profissional, user.link_instagram,
        user.link_whats_user, user.link_facebook, user.link_linkedin, user.preferencias_homeoffincing, user.preferencias_coworking, user.id_user], callback)
}

UsersDAO.prototype.registerPersonalDates= function (user, callback) {
    this._connection.query(`UPDATE usuarios SET email_user = ?, profissao = ?, genero_user = ?, rg_user = ?, celular_user, telefone_user = ?, end_cep = ?, end_rua = ?, end_rua_num = ?, end_bairro = ?, end_cidade = ?,  end_estado = ? where cpf_user = ? `, 
    [user.email_user, user.profissao, user.genero_user, user.rg_user, user.celular_user, user.telefone_user, user.end_cep, user.end_rua, user.end_rua_num, user.end_bairro, user.end_cidade, user.end_estado, user.id_user], callback)
}

UsersDAO.prototype.uploadImageCadastro = function(user, callBack){
        this._connection.query('INSERT INTO espacos SET  ?',user,callBack)
    }
    
UsersDAO.prototype.renderSpaces = function(user, callBack){
    this._connection.query(`SELECT * FROM espacos where loc_cidade = '${user.loc_cidade}'`,callBack);
    }
    

module.exports = function () {
    return UsersDAO;
}