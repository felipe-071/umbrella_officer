$(document).ready(function(){
    $("#forCustomers").click(function(){
        $("#forCustomers").css("color", "var(--scale-5-blue)");
        $("#forAdvertisers").css("color", "var(--text-1-black)");
        $("div::after").animate({left: '0'});
    });

    // $("#forCustomers").ready(function(){
    //     $("#forCustomers").css("color", "var(--scale-5-blue)");
    //     $("#forAdvertisers").css("color", "var(--text-1-black)");
    //     $("align-options:after").animate({left: '0'});
    // });

    $("#forAdvertisers").click(function(){
        $("#forAdvertisers").css("color", "var(--scale-5-blue)");
        $("#forCustomers").css("color", "var(--text-1-black)");
        $("div::after").animate({right: '0'});
    })

});

