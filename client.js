$(document).ready(readyNow);
let array = [];
function readyNow(){
  console.log('connected');

  $(".buttonTop").on('click',function(){

    console.log('hi')

    $(".output").append('<div class="formInfo"><br><br><button class="remove1">Remove</button><button class="changeColor">Change Color</button></div>');
    array.push($('.formInfo').data());
    let x = 
    $('.output').text()
    console.log(array);
  });

$('body').on('click', '.remove1', function(){

  $(this).parent().remove();
  array.splice($(this));
  console.log(array)
});

$('body').on('click', '.changeColor', function(){
  $(this).parent().toggleClass('newBack');
});

// function numCount(){
//   array = [];
//   $( '.formInfo' ).each(function( index ) {
//     array.push( ($( this ) );
//
//     console.log(array);
//   });
// }

}
