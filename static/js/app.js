$( reset_challange );
$( color_draggable );
$( color_droppable );

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
  // Location one only accepts the blue dot. 
  $('#one').droppable({ accept: '#blue',hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy');               
  }}); 
}



