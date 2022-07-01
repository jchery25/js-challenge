$( draggable_button );
$( reset_challange );
$( colors_enter_section );

/**
 * draggable_button() => Allows users to drag buttons within the limits of their windows.
 */
function draggable_button() {
  $('#blue').draggable({ containment: "window" });
  $('#red').draggable({ containment: "window" });
  $('#green').draggable({ containment: "window" });
  $('#black_01').draggable({ containment: "window" });
  $('#black_02').draggable({ containment: "window" });
}

/**
 * reset_challange() => Allows users to reset the challange.
 */
function reset_challange() {
  $("#reset_button").click(function(){
    document.location.reload();
  });
}

/**
 * colors_enter_section() => Check to see if the color enters a specific grid.
 */
function colors_enter_section(){
  $("#blue").mouseenter(function(){
    $this = $(this)
    
  })
}