$(document).ready(readyNow);
let array = [];
function readyNow(){
  console.log('connected');

  $(".buttonTop").on('click',function(){

    console.log('hi')
let x = array.length
array.push($('.formInfo').data());
    $(".output").append('<div class="formInfo"><br><br><button class="remove1">Remove</button><button class="changeColor">Change Color</button></div>');



    console.log(array);
  });

$('body').on('click', '.remove1', function(){

  $(this).parent().remove();

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
