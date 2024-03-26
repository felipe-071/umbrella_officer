$(document).ready(function(){
    $("#save").click(function(){
        var form = $("#myformProfile");
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
                about_me:{
                    required:true,
                    minlength:3,
                    maxlength:150
                },
                professional_profile:{
                    required: true,
                    minlength:3,
                    maxlength:150 
                },
               
            },
            messages: {
                about_me:{
                    required:"Preencha esse campo",
                    minlength:"Mínimo 3 caracteres",
                    maxlength:"Não ultrapasse 150 caracteres"
                },
                professional_profile: {
                    required:"Preencha esse campo",
                    minlength:"Mínimo 3 caracteres",
                    maxlength:"Não ultrapasse 150 caracteres"
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

