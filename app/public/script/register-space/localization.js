$(document).ready(function () {
    $("#search-localization").click(function(){
        $("#location-data").show('slow')
    })
        $( "iframe").mouseenter(function(){
            $("#encompass-form").fadeTo("slow", 0.5);
          });
    
        $( "iframe").mouseleave(function(){
            $("#encompass-form").fadeTo("slow", 1);
          });

        $("#continue").click(function(){
            $("#first-step").css({display: 'none'});
            $("#second-step").css({display: 'flex'});
            $("#advance").css({background: "var(--scale-2-purple)"})
            $("#advance").addClass( "next_default")
        })

          $("#addMore").click(function(){
            $(".inputDiv:nth-child(2)").css({display: "flex"});
          })

          $("#return").click(function(){
            $("#second-step").css({display: "none", transition: ".3 ease-in"})
            .animate({left: "50px"});
            $("#first-step").css({display: "flex", transition: ".3 ease-in"})
            .animate({left: "50px"});
          })
});