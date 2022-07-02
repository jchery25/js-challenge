var COUNTER = 0

$( reset_challange );
$( color_draggable );
$( color_droppable );
$( congratulation );


/**
 * reset_challange() => Allows users to reset the challange.
 */
function reset_challange() {
  $("#reset_button").click(function(){
    document.location.reload();
  });
}

/**
 * draggable_button() => Allows users to drag colored dot and move a dot, from the dot's's starting point, within the limits of the browser's window.
 */
 function color_draggable() {
  $('.color').draggable({ containment: 'window', revert: true });
}

/**
 * color_droppable() => Allows users to drop a colored dot to the dot's appropriate location in the logo. The dots that are dropped in the wrong location reverts back to the starting point. No two dots can occupy the same location.
 * 
 * Reference: https://www.javatpoint.com/jquery-ui-droppable
 */
function color_droppable(){

  // Location TWO only accepts the BLUE dot. 
  $('#two').droppable({ accept: '#blue',hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy'); 
    COUNTER = COUNTER + 1              
  }}); 

  // Location THREE only accepts the RED dot. 
  $('#three').droppable({ accept: '#red',hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy');
    COUNTER = COUNTER + 1  
  }}); 

  // Location ONE accepts the BLACK dots. 
  $('#one').droppable({ accept: '#black_01, #black_02',hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy');   
  }}); 

  // Location FOUR accepts the GREEN dots. 
  $('#four').droppable({ accept: '#green',hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy');   
    COUNTER = COUNTER + 1             
  }}); 

    // Location FOUR accepts the GREEN dots. 
    $('#four').droppable({ accept: '#green',hoverClass: 'active', drop: function(evt, ui){
      $(this).html(ui.draggable.remove().html());  
      $(this).droppable('destroy');
      COUNTER = COUNTER + 1     
    }}); 

    // Location FIVE accepts the BLACK dots. 
  $('#five').droppable({ accept: '#black_01, #black_02',hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy');   
    COUNTER = COUNTER + 1             
  }}); 

}

/**
 * congratulation() = Congratulate the user for completing the JS Challenge.
 */
function congratulation(){
  if (COUNTER == 5){
    $(".congratulation").text("<p>Congratulation! You completed the JS-Challenge!</p>")
  }
}


