<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style/default/default.css">
</head>
<body>
    <header id="header" class="container_margin_default">
        <div class="default_margin">
            <a href="/"> <img src="images/default/logo.svg" alt="logo"> </a>
            <div id="container_search">
                <ul id="type_office">
                    <li class="option_office checked">Espaço adaptado</li>
                    <li class="option_office">Espaço corporativo</li>
                </ul>
                    <div class="container_search_input">
                        <span id="search_txt">Pesquise locais para trabalhar</span>
                        <div id='container_informations_find_coworking'>
                            <input id="localization" type="text" placeholder="Localização:">
                            <input type="date" id="check_in">
                        </div>
                        <a href="#">
                            <div>
                                <img src="images/default/search.svg" alt="pesquisa">
                            </div>
                        </a>  
                    </div>
            </div>

            <div id="menu">
                <div id='menu_sign-in-up'>
                        <img src="images/default/user.svg" alt="usuário">
                        <img src="images/default/menu_hamburguer.svg" alt="menu">
                </div>
                <div class="menu_open">
                    <div>
                        <img src="images/default/perfil.png" alt="foto de perfil">
                       <h3>Usuário <span>Cliente</span></h3>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li class="popUp-login-signUp">
                                    <img src="images/default/my-perfil.png" alt="meu perfil">
                                    Login
                                </li>
                                <li class="popUp-login-signUp">
                                    <img src="images/default/sign_up.png" alt="favoritos">
                                    Cadastre-se
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <a href="/central-de-ajuda"></a><img src="images/default/question.png" alt="sair da conta">
                       Central de ajuda</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="container_popUp_login-signUp">
            <div class="popUp">
                <img class="close_popup" src="images/default/close_icon.svg" alt="close">
                <h2>Umbrella Officing</h2>
                <h3>Seja bem-vindo</h3>
                <div>
                    <span>Faça seu login para continuar</span>
                    <form>       
                        <label for="cpf-email">
                            CPF ou E-mail :
                            <input type="text" id="cpf-email">
                        </label>
                        
                        <label for="password-login">
                            Senha:
                            <input type="password" id="password-login">
                        </label>

                        <div>
                            <a href="#">Esqueceu a senha?</a>
                        </div>
                        
                        <button type="submit">LOGIN</button>
                    </form>
                    <div id="alternatives">
                        <div><span>OR</span></div>
                        <div>
                            <span>Faça login com suas Redes Sociais</span>
                            <img src="images/default/icon-google.png" alt="ícone do google">
                            <img src="images/default/icon-facebok.svg" alt="ícone do facebbok">
                            <img src="images/default/icon-apple.png" alt="ícone do facebbok">
                            <span>Ainda não possui conta? <a href="#">Cadastre-se</a></span>
                        </div>
                    </div>
            </div>     
            </div>
            <div class="popUp">
                <img class="close_popup" src="images/default/close_icon.svg" alt="close">
                <h2>Umbrella Officing</h2>
                <h3>Seja bem-vindo</h3>
                <div>
                    <span>Cadastre-se e faça parte da nossa comunidade</span>
                    <form>
                        <label for="name">
                            Nome:
                            <input type="text" id="name">
                        </label>

                        <label for="middlename">
                            Sobrenome:
                            <input type="text" id="middlename">
                        </label>

                        <label for="cpf">
                            CPF:
                            <input type="number" id="cpf">
                        </label>

                        <label for="birth_date">
                            Data de nascimento
                            <input type="date" id="birth_date">
                        </label>
                        
                        <label for="phone">
                            Telefone:
                            <input type="number" id="phone">
                        </label>

                        <button type="submit">CADASTRAR</button>
                    </form>
            </div>        
            </div>
        </div>
    </header>
    <div id='box_black'></div>


 <footer class="container_margin_default">

        <div class="default_margin">
            <div id="margin2">
            <div id="logo">
                <img src="images/default/logo_footer.svg" alt="logo">
                <h4>Escritorizando <span><br>espaços </span></h4>
                <span>Umbrella Officing&copy 2022</span>
            </div>

            <ul>
                <h5>Junte-se a nós</h5>
                <li><a href="/">Home</a></li>
                <li><a href="#">Cadastre-se</a></li>
                <li><a href="#">Sua conta</a></li>
                <li><a href="#">Faça sua reserva</a></li>
                <li><a href="#">Anuncie seu espaço</a></li>
            </ul>

            <ul>
                <h5>Atendimento</h5>
                <li><a href="#">Chat</a></li>
                <li><a href="#">Fórum</a></li>
                <li><a href="#">Central de ajuda</a></li>
            </ul>

            <ul>
                <h5>Sobre nós</h5>
                <li><a href="#">Quem somos?</a></li>
                <li><a href="#">Missão, valores e visão</a></li>
                <li><a href="#">Por que Umbrella Officing</a></li>
                <li><a href="#">Desenvolvedores</a></li>
            </ul>

            </div>
            
            <div id="bottom_footer">
                <div>
                    <div id="network_div"> 
                        <img src="images/default/icon_intagram.svg" alt="ícone do instagram">
                        <img src="images/default/icon_facebook.svg" alt="ícone do facebook">
                    </div>

                    <div id="scroll_up">
                        <img src="images/default/arrow_up.svg" alt="ícone de flecha">
                    </div>
            </div>

        </div>

        
    </footer>

    <script src="script/default/header/header.js"></script>

</body>
</html>
