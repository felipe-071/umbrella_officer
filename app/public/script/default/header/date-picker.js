$( function() {
$from = $("#from");
$to = $("#to");
const fromData = document.querySelector('#dateFrom')
const toData = document.querySelector('#dateTo')
// const reserved_days = document.querySelector('#reserved-days')

var array_dates = [];
var map_dates = [];


initialise();


$from
  .datepicker({
    numberOfMonths: 1,
    minDate: 0,
    dateFormat:'dd/mm/yy',
    monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]
  })
  .on("change", function() {
    $to.datepicker("option", "minDate", $from.val());
    fromData.setAttribute('value',$from.val())
    $to.datepicker("option", "maxDate", getMaxDate($from.val()));
  });

$from.datepicker( "option", "dayNamesMin", [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ] );

$to
  .datepicker({
    defaultDate: "+1w",
    dateFormat:'dd/mm/yy',
    minDate:0,
    numberOfMonths: 1,
    monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]
  }
  )
  .on("change", function() {
    map_dates = [];
    toData.setAttribute('value',$to.val())
    // setSelectedreserved_days();
  });

$to.datepicker( "option", "dayNamesMin", [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ] );

// function teste(){
//   var dataTo =  $( "#to" ).datepicker( "option", "dateFormat", "dd/mm/yy" );
//   var test7 = toData.setAttribute('value',dataTo[0].value)
// }

// function setDate(element) {
//   var date;
//   try {
//     $(".teste").datepicker("option","dateFormat","dd-mm-yy")
//   } catch (error) {
//     date = null;
//   }

//   console.log('teste1')
//   return date;
// }

function getMaxDate(date, range) {
  var yyyy,
    mm,
    dd = 0;
  if (date.includes("-")) {
    var arr = date.split("-");
    var dd = parseInt(arr[1]) + parseInt(range);
    var mm = parseInt(arr[0]) - 1;
    var yyyy = arr[2];
  } else if (date.includes("/")) {
    var arr = date.split("/");
    var dd = parseInt(arr[1]) + parseInt(range);
    var mm = parseInt(arr[0]) - 1;
    var yyyy = arr[2];
  }
  return new Date(yyyy, mm, dd);
}
function initialise() {
  var start_date = getCurrentDate();
  var end_date = getNextWeek();
}

function parseDate(date) {
  if (date.includes("-")) {
    var arr = date.split("-");
    return arr[2] + "-" + arr[0] + "-" + arr[1];
  } else if (date.includes("/")) {
    var arr = date.split("/");
    return arr[2] + "-" + arr[0] + "-" + arr[1];
    
  } else {
    return null;
  }
}

function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return mm + "-" + dd + "-" + yyyy;
}

function getNextWeek() {
  var nextWeek = new Date();
  var dd = nextWeek.getDate() + 7;
  var mm = nextWeek.getMonth() + 1; //January is 0!
  var yyyy = nextWeek.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + "-" + dd + "-" + yyyy;
}

} );