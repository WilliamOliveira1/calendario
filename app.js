var clickDia = 0;
var clickWeek = 0;

/**
 * 
 */
$(".tableRow").on('click', function(e) {    
    if(e.target.id < 25 && clickDia < 1) {
        clickDia += 1;
        $("#"+e.target.id).css({
            'border-radius' : '2px',
            'background-color' : 'red',
            'box-shadow' : '0 25px #412554',
            'transform' : 'translateY(-25px)'            
         });    
    } if(e.target.id <= 31  && clickDia < 1) {
        clickDia += 1;
        $("#"+e.target.id).css({
            'border-radius' : '2px',
            'background-color' : 'red',
            'box-shadow' : '0 34px #412554',
            'transform' : 'translateY(-25px)'            
         }); 
    }
});

/**
 * 
 */
$(".tableRowWeek").on('click', function(e) {    
    if(clickWeek < 1) {
        clickWeek += 1;
        $("#"+e.target.id).css({
            'border-radius' : '2px',
            'background-color' : 'red',
            'box-shadow' : '0 34px #412554',
            'transform' : 'translateY(-25px)'            
         }); 
    }
});

/**
 * 
 */
$("#limparStyle").on('click', function() {
    $(".button").css({
        'border-radius' : '',
        'background-color' : '',
        'box-shadow' : '',
        'transform' : ''            
     });
     clickDia = 0;
});

$("#limparStyleWeek").on('click', function() {
    $(".buttonSemana").css({
        'border-radius' : '',
        'background-color' : '',
        'box-shadow' : '',
        'transform' : ''            
     });
     clickWeek = 0;
});