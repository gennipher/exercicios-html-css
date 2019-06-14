//$(seletor).ação();

/*$(document).ready(function() {
    $('button').click(function(){ // chama uma função quando clica em algum lugar
        $('h1').hide(); // função que esconde um seletor (uma div)
    });
});
 Uma forma mais simplificada de executar uma function:
    $(function(){
        $('button').click(function(){
            $('h1').hide();
        });
    });*/

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("background-color", "blue");
//     });

//     $('#vermelho').click(function(){
//         $('p').css("background-color", "red");
//     });
// });

// $(function() {
//     $('#azul').click(function(){
//         $('p')
//         .css("background-color", "blue")
//         .fadeOut().delay(1000).fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("background-color", "red");
//         $('#mensagem')
//         .text("Cor alterada com sucesso")
//         .css({color: 'red', border: '1px solid red'})
//         .delay(3000)
//         .addClass('green')
//     $('button').removeClass('red');
//     });
// });

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });
    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});