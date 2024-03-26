$(document).ready(function(){
    $.validator.addMethod("usernameRegex", function(value, element) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    }, "Escreva no formato de e-mail. Ex: fulano@gmail.com");

    $.validator.addMethod("cpfRegex", function(value, element) {
        return /(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/.test(value);
    }, "CPF inválido");

    $.validator.addMethod("phoneRegex", function(value, element) {
        return /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/.test(value);
    }, "Número inválido");
   

    $(".next").click(function(){
        var form = $("#myform");
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
                name:{
                    required:true,
                    minlength:3,
                    maxlength:100
                },
                email: {
                    required: true,
                    usernameRegex: true
                },
                cpf:{
                    required:true,
                    cpfRegex:true,
                    maxlength:11
                },
                password : {
                    required: true,
                    minlength:8
                },
                conf_password : {
                    required: true,
                    equalTo: '#password',
                },
                phone:{
                    required:true,
                    phoneRegex: true
                },
                profession:{
                    required:true
                },
                address:{
                    required:true
                }
            },
            messages: {
                name:{
                    required:"Preencha esse campo",
                    minlength:"Mínimo 3 caracteres",
                    maxlength:"Não ultrapasse 100 caracteres"
                },
                email: {
                    required: "Preencha esse campo",
                },
                cpf:{
                    required:"Preencha esse campo",
                    maxlength:"Máximo 11 caracteres"
                },
                password : {
                    required: "Preencha esse campo",
                    minlength:"Mínimo 8 dígitos"
                },
                conf_password : {
                    required: "Preencha esse campo",
                    equalTo: "As senhas não são compatíveis",
                },
                phone:{
                    required: "Preencha esse campo"
                },
                profession:{
                    required:"Preencha esse campo"
                },
                address:{
                    required:"Preencha esse campo"
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


$(document).ready(function () {   
    // $("#cpf").mask("000.000.000-00"); 
    $("#phone").mask("(00) 0000-0009"); 
    $("#phone").blur(function (event) {

        if ($(this).val().length == 15) {

            $("#phone").mask("(00) 00000-0009")

        } else {

            $("#phone").mask("(00) 0000-00009")

        }

    }) 
});
