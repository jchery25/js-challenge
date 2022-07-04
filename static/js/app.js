var COUNTER = 0

$( reset_challange );
$( color_draggable );
$( color_droppable );

/**
 * Allows users to reset the challange.
 */
function reset_challange() {
  $("#reset_button").click(function(){
    document.location.reload();
  });
}

/**
 * Counts the number of correct dot location and displays message if the counter matches the number of correct dot location.
 */
 function counter() {
    COUNTER = COUNTER + 1      
    if (COUNTER == 5){
      $('.message').append('<strong>Congratulation! You completed the JS-Challenge!</strong>');
    }
}

/**
 * Allows users to drag colored dot and move a dot, from the dot's's starting point, within the limits of the browser's window.
 */
 function color_draggable() {
  $('.color').draggable({ containment: 'window', revert: true });
}

/**
 * Allows users to drop a colored dot to the dot's appropriate location in the logo. The dots that are dropped in the wrong location reverts back to the starting point. No two dots can occupy the same location.
 */
function color_droppable(){
  // Location ONE accepts the GREEN dots. 
  grid_to_dot_generator('one', '#green')

  // Location TWO only accepts the BLUE dot.
  grid_to_dot_generator('two', '#blue')

  // Location THREE only accepts the RED dot. 
  grid_to_dot_generator('three', '#red')

  // Location FOUR accepts the BLACK dots.
  grid_to_dot_generator('four', '#black_01, #black_02')
  
  // Location FIVE accepts the BLACK dots. 
  grid_to_dot_generator('five', '#black_01, #black_02')
}

/**
 * Generates the correct dot location.
 * @param {string} grid_number the grid number that the dot is associated with.
 * @param {string} accepted_dots the accepted dot's html id that can be applied to the specific grid. 
 */
function grid_to_dot_generator(grid_number, accepted_dots){
  $('#' + grid_number).droppable({ accept: accepted_dots, hoverClass: 'active', drop: function(evt, ui){
    $(this).html(ui.draggable.remove().html());  
    $(this).droppable('destroy');   
    counter();             
  }}); 
}



