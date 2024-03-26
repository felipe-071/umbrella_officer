var bcrypt = require("bcryptjs");
const { application } = require("express");
var salt = bcrypt.genSaltSync(12);

const multer = require('multer');

const armazenamentoMemoria = multer.memoryStorage()

const upload2 = multer({
  storage: armazenamentoMemoria,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
})

module.exports.home = (application, req, res) => {

  if (req.session.autenticado) {

    const connection = application.config.dbConnection;
    const userDao = new application.app.models.UsersDAO(connection);

    var id_user = Number(req.session.id_user)

    userDao.findUserInformations(id_user, (error, result) => {
      if (error) throw error

      autenticado = {
        name: req.session.usu_name_autenticado,
        profession: result[0].profissao,
        id_user: req.session.id_user,
        profile_picture: result[0].fotos_user
      };

      res.render("pages/home/index", autenticado);

    });

  } else {
    autenticado = { autenticado: null };
    res.render("pages/home/index", autenticado);
  }
} 

module.exports.sair = (application, req, res) => {
  req.session.destroy();
  res.redirect("/");
}

module.exports.registerUser = (application, req, res) => {

  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    nome_user: req.body.name,
    email_user: req.body.email,
    cpf_user: req.body.cpf,
    senha_user: bcrypt.hashSync(req.body.password, salt),
    dt_nasc_user: req.body.birth_date,
    celular_user: req.body.phone,
    profissao: req.body.profession,
    // end_user: req.body.address
  };

  userDao.registerUser(dadosForm, (error, result) => {
    if (error) {
      throw error
    }
    res.redirect('/');
  });
}

module.exports.formLogin = (application, req, res) => {

  var dadosForm = {
    userId: req.body.cpfEmail,
    senha_user: req.body.password
  };

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
  }

  const connection = application.config.dbConnection;
  const usersDao = new application.app.models.UsersDAO(connection);

  usersDao.login(dadosForm, (error, results) => {

    if (error) throw error;
    var total = Object.keys(results).length;

    if (total == 1) {
      if (bcrypt.compareSync(dadosForm.senha_user, results[0].senha_user)) {
        var truncate_name = truncate(results[0].nome_user, 2)
        var name_user = capital_letter(truncate_name)
        req.session.autenticado = true;
        req.session.usu_name_autenticado = name_user;
        req.session.id_user = results[0].cpf_user
        req.session.profession = results[0].profissao
        return res.redirect("/");
      }
    }
  }
  )
}

module.exports.uploadImagePerfil = (application, req, res) => {

  if (!req.file) {

    var dadosForm = {
      fotos_user: null,
      cpf_user: autenticado.id_user
    };

    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);


    return usersDao.uploadImage(dadosForm, (error, results) => {
      if (error) throw error;
      res.redirect('/')
    })

  }

  else {

    let fileContent = req.file.buffer.toString('base64');

    var dadosForm = {
      fotos_user: fileContent,
      cpf_user: autenticado.id_user
    };


    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);

    usersDao.uploadImage(dadosForm, (error, results) => {
      if (error) throw error;
      res.redirect('/')
    })
  }
}

module.exports.renderProfile = (application, req, res) => {  

  if (req.session.autenticado) {

    const connection = application.config.dbConnection;
    const userDao = new application.app.models.UsersDAO(connection);

    var id_user = Number(req.session.id_user)

    userDao.findUserInformations(id_user, (error, result) => {
      if (error) throw error

      autenticado = { 
        about_me: result[0].sobre_mim,
        profession_profile: result[0].perfil_profissional,
        link_insta: result[0].link_instagram,
        link_whats: result[0].link_whats_user,
        link_face: result[0].link_facebook,
        link_linkedin: result[0].link_linkedin,
        preferencias_homeoffincing: result[0].pref_homeOfficing,
        preferencias_coworking: result[0].pref_coworking,
        id_user: req.session.id_user
      };

      res.render("pages/my-account/my-profile", autenticado);

    });

  } else {
    autenticado = { autenticado: null };
    res.render('pages/my-account/my-profile')
  }    
}

module.exports.registerProfile = (application, req, res) => {

  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    sobre_mim: req.body.about_me,
    perfil_profissional: req.body.profession_profile,
    link_instagram: req.body.link_insta,
    link_whats_user: req.body.link_whats,
    link_facebook: req.body.link_face,
    link_linkedin: req.body.link_linkedin,
    pref_homeOfficing: req.body.preferencias_homeoffincing,
    pref_coworking: req.body.preferencias_coworking,
    id_user: req.session.id_user
  };

  console.log(dadosForm);

  userDao.registerProfile(dadosForm, (error, result) => {
    if (error) {
      throw error
    }
    console.log(result)
    res.redirect('/meu-perfil');
  });
}

module.exports.renderPersonalDates = (application, req, res) => {

  if (req.session.autenticado) {

    const connection = application.config.dbConnection;
    const userDao = new application.app.models.UsersDAO(connection);

    var id_user = Number(req.session.id_user)

    userDao.findUserInformations(id_user, (error, result) => {
      if (error) throw error

      autenticado = { 
        name_date: result[0].nome_user,
        birth: result[0].dt_nasc_user,
        gender_date: result[0].genero_user,
        profession_date: result[0].profissao,
        cpf_date: result[0].cpf_user,
        rg_date: result[0].rg_user,
        orgao_exp: result[0].orgao_expedidor,
        phone_date: result[0].telefone_user,
        cell_date: result[0].celular_user,
        cep_date: result[0].end_cep,
        road_date: result[0].end_rua,
        number_date: result[0].end_rua_num,
        neighborhood_date: result[0].end_bairro, 
        city_date: result[0].end_cidade, 
        state_date: result[0].end_estado, 
        email_date: result[0].email_user
      };

      console.log(autenticado)

      res.render("pages/my-account/personal-date", autenticado);

    }); 

  } else {
    autenticado = { autenticado: null };
    res.render('pages/my-account/personal-date')
  }    
}

module.exports.registerPersonalDates = (application, req, res) => {

  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    email_user: req.body.email_date,
    genero_user: req.body.gender_date,
    profissao: req.body.profession_date,
    rg_user: req.body.rg_date,
    orgao_expedidor: req.body.orgao_exp,
    telefone_user: req.body.phone_date,
    celular_user: req.body.cell_date,
    end_cep: req.body.cep_date,
    end_rua: req.body.road_date,
    end_rua_num: req.body.number_date,
    end_bairro: req.body.neighborhood_date,
    end_cidade: req.body.city_date, 
    end_estado: req.body.state_date
  };

  console.log(dadosForm);

  userDao.registerPersonalDates(dadosForm, (error, result) => {
    if (error) {
      throw error
    }
    console.log(result)
    res.redirect('/dados-pessoais');
  }); 
}

module.exports.renderSpaces = (application,req,res)=>{
  // const connection = application.config.dbConnection;
  // const userDao = new application.app.models.UsersDAO(connection);

  // var dadosForm = {
  //   loc_cidade: 'Rio das Flores'
  // }

  // userDao.renderSpaces(dadosForm,(error, result) => {
  //   console.log(result)
    res.render('pages/cadastro')
  //  });
}


module.exports.uploadImageCadastro = (application,req,res)=>{

  var fileInfo = req.files

  let content = [null,null,null,null]

  for(let i = 0; i<req.files.length;i++){
    content[i] = req.files[i].buffer.toString('base64')
  }

  // var foto1 = fileInfo[0]
  // var foto2 = fileInfo[1]
  // var foto3 = fileInfo[2]
  // var foto4 = fileInfo[3]

  // foto4.buffer.toString('base64')

  // console.log(foto4)

  var dadosForm = {
    status_anun: req.body.status_anun,
    tipo_ambiente_anun: req.body.tipo_ambiente_anun,
    categoria_anun:req.body.categoria_anun,
    titulo_anun:req.body.titulo_anun,
    // quant_sala:req.body.quant_sala,
    descricao_anun: req.body.descricao_anun,
    foto1_anun:content[0],
    foto2_anun:content[1],
    foto3_anun:content[2],
    foto4_anun:content[3],
    loc_cidade: req.body.loc_cidade,
    loc_estado: req.body.loc_estado,
    data_cadastro_anun: req.body.data_cadastro_anun,
  };

  console.log(dadosForm)

  // const connection = application.config.dbConnection;
  // const usersDao = new application.app.models.UsersDAO(connection);

  // usersDao.uploadImageCadastro(dadosForm, (error, results) => {
  //   if (error) throw error;
  //   res.redirect('/')
  // })
}

module.exports.searchSpaces = (application,req,res)=>{
  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

  var dadosForms = {
    loc_cidade: req.body.localizacao,
    dateFrom: req.body.dateFrom,
    dateTo: req.body.dateTo,
    people: req.body.people
  }

  userDao.renderSpaces(dadosForms,(error, result) => {
    
      autenticado = result

      res.render('pages/search-spaces/search',autenticado)
        // req.session.tipo_ambiente = result[0].tipo_ambiente_anun
        // req.session.profession = results[0].profissao
   });
}

module.exports.registerSpace = (application,req,res)=>{
  res.render('pages/register/register')
}