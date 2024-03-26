create database umbrella_officing;
use umbrella_officing;  

create table usuarios (
id_user int auto_increment primary key,
nome_user varchar(100) not null,
email_user varchar(30) not null,
cpf_user char(14) not null,
senha_user char(60) not null,
dt_nasc_user date not null,
celular_user varchar(14),
profissao varchar(30),
end_cep varchar(11),
end_rua varchar(150),
end_rua_num varchar(10),
end_bairro varchar(50),
end_cidade varchar(50),
end_estado varchar(50),
telefone_user varchar(14),
genero_user varchar(9),
rg_user varchar(20),
orgao_expedidor varchar(60),
link_instagram longtext,
link_whats_user longtext ,
link_facebook longtext,
link_linkedin longtext,
sobre_mim text,
perfil_profissional text,
preferencias_homeoffincing char(5),
preferencias_coworking char(5),
fotos_user longblob,
data_cadastro datetime
); 

select*from usuarios; 

delete from usuarios where id_user = 10;

create table administradores (
foto_admin longblob,
nome_admin varchar(100),
id_admin int auto_increment primary key,
cpf_admin char(11) not null,
senha_admin char(8)
);

select*from administradores;

create table espacos (
status_anun varchar(7), 
cod_anun int auto_increment primary key,
tipo_ambiente_anun varchar(9),
categoria_anun varchar(15),
subcategoria_anun varchar(15),
titulo_anun varchar(30),
descricao_anun text,
foto1_anun longblob,
foto2_anun longblob,
foto3_anun longblob,
foto4_anun longblob,
foto5_anun longblob,
foto6_anun longblob,
loc_cep varchar(11),
loc_rua varchar(150),
loc_rua_num varchar(10),
loc_bairro varchar(50),
loc_cidade varchar(50),
loc_estado varchar(50),
favoritado char(3),
data_cadastro_anun datetime,
id_user int,
foreign key (id_user) references usuarios (id_user)
);

select*from espacos;

create table sala (
cod_sala int auto_increment primary key,
modelo_trabalho varchar(20),
tipo_sala varchar(30),
quant_pessoas_sala int,
acesso_banheiros_sala int,
tamanho_sala varchar(5),
qualid_wifi_sala varchar(5),
qualid_computador_sala varchar(5),
qte_computadores_sala int,
qte_tomadas_sala int, 
qte_mesas_sala int, 
qte_assentos_sala int, 
ar_condicionado_sala char(3),
qte_janelas_sala int,
capacidade_pessoas varchar(2),
data_reserva date,
cancelamento char(3),
avaliação_sala varchar(5),
horario_reservado time,
preco_sala decimal(6,2),
status_reserva varchar(7),
cod_anun int,
foto1_sala longblob,
foto2_sala longblob,
foto3_sala longblob,
foto4_sala longblob,
foto5_sala longblob,
foto6_sala longblob,
compartilhamento_sala char(3),
acesso_outras_salas char(3),
foreign key(cod_anun) references espacos (cod_anun)
);

select*from sala;

create table notificacoes (
data_notificacao date,
titulo_notificacao varchar(20),
descricao_notificacao text,
status_notificacao varchar(20), 
cod_notificacao int auto_increment primary key,
id_user int,
foreign key(id_user) references usuarios (id_user)
); 

select*from notificacoes;

create table artigo (
cod_artigo int auto_increment primary key,
titulo_do_artigo varchar(30),
conteudo_do_artigo text,
categoria_artigo varchar(30),
data_artigo date,
id_admin int,
foreign key(id_admin) references administradores (id_admin)
);

select*from artigo;

create table avaliacao (
num_estrelas varchar(5),
cod_avalia int auto_increment primary key,
data_avalia date,
texto_avalia varchar(100),
cod_anun int,
foreign key(cod_anun) references espacos(cod_anun)
);

select*from avaliacao;

create table admin_user ( 
id_admin int,
id_user int,
foreign key(id_admin) references administradores (id_admin),
foreign key(id_user) references usuarios (id_user)
);

select*from admin_user;

create table admin_espacos (
id_admin int,
cod_anun int,
foreign key(id_admin) references administradores (id_admin),
foreign key(cod_anun) references espacos (cod_anun)
);

select*from admin_espacos;

create table aluguel (
id_admin int,
cod_sala int,
foreign key(id_admin) references administradores (id_admin),
foreign key(cod_sala) references sala (cod_sala)
);

select*from aluguel;

create table usuario_avalia (
id_user int,
cod_avalia int,
foreign key(id_user) references usuarios (id_user),
foreign key(cod_avalia) references avaliacao (cod_avalia)
);

create table teste (
  id_usuario int NOT NULL AUTO_INCREMENT,
  nome_usuario varchar(45) DEFAULT NULL,
  user_usuario varchar(45) DEFAULT NULL,
  senha_usuario char(60) DEFAULT NULL,
  email_usuario varchar(45) DEFAULT NULL,
  fone_usuario varchar(11) DEFAULT NULL,
  imagemperfil_usuario longblob,
  tipo_usuario int DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
);

select*from teste;