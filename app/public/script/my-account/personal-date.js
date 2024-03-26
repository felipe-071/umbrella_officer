/*Script Jquery adicionando as máscaras no formulário*/
$(document).ready(function () {
    $("#cpf_date").mask("000.000.000-00"); 
    $("#rg_date").mask("999.999.999-W", {

        translation: {

            'W': {

                pattern: /[X0-9]/

            }

        },

        reverse: true
    });
    $("#phone_date").mask("(00) 0000-0000");
    $("#cell_date").mask("(00) 0000-00009");
    $("#cell_date").blur(function (event) {

        if ($(this).val().length == 15) {

            $("#phone").mask("(00) 00000-0009")

        } else {

            $("#phone").mask("(00) 0000-00009")

        }

    })
    $("#cep_date").mask("000.000-000");
});

$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#road_date").val("");
        $("#number_date").val("");
        $("#neighborhood_date").val("");
        $("#city_date").val("");
        $("#state_date").val(""); 
    }
    
    //Quando o campo cep perde o foco.
    $("#cep_date").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#road_date").val("..."); 
                $("#neighborhood_date").val("...");
                $("#city_date").val("...");
                $("#state_date").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#road_date").val(dados.logradouro); 
                        $("#neighborhood_date").val(dados.bairro);
                        $("#city_date").val(dados.localidade);
                        $("#state_date").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        message("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                message("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});


$(document).ready(function(){
    $.validator.addMethod("usernameRegex", function(value, element) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    }, "Escreva no formato de e-mail. Ex: fulano@gmail.com");

    $.validator.addMethod("phoneRegex", function(value, element) {
        return /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/.test(value);
    }, "Número inválido");

    $validator.addMethod("rgRegex", function RgFormat(v0,errChar='?'){
        var v = v0.toUpperCase().replace(/[^\dX]/g,'');
        return (v.length==8 || v.length==9)?
           v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4'):
           (errChar+v0)
        ;
    });

    $("#edit_ad").click(function(){
        var form = $("#personal_date");
        console.log(form)
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("has-error");
            },
            rules: {
                email: {
                    required: true,
                    usernameRegex: true
                },
                gender_date:{
                    required: true
                },
                profession_date:{
                    required: true
                },
                rg_date:{
                    required: true,
                    
                },
                orgao_exp:{
                    required: true
                },
                phone_date:{
                    required: true,
                    phoneRegex: true
                },
                cell_date:{
                    required: true,
                    phoneRegex: true
                },
                cep_date:{ 
                    required: true
                },
                number_date:{
                    required: true
                }
            },
            messages: {
                email_date: {
                    required: "Preencha esse campo",
                },
                gender_date:{
                    required: "Escolha uma opção"
                },
                profession_date:{
                    required:"Preencha esse campo"
                },
                rg_date:{
                    required:"Preencha esse campo"
                },
                orgao_exp:{
                    required:"Preencha esse campo"
                },
                phone_date: {
                    required: "Preencha esse campo"
                },
                cell_date: {
                    required: "Preencha esse campo"
                },
                cep_date:{ 
                    required: "Preencha esse campo"
                },
                number_date: {
                    required: "Preencha esse campo"
                }
            }
        });
        if (form.valid() === true){
            if ($('#test1').is(":visible")){
                current_fs = $('#test1');
                next_fs = $('#test2');
            }
            next_fs.show(); 
            current_fs.hide();
        }
    }); 
});