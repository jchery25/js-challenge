$( draggable_button );
$( reset_challange );

/**
 * draggable_button() => Allows users to drag buttons within the limits of their windows.
 */
function draggable_button() {
    $('#black_01').draggable({ containment: "window" });
    $('#black_02').draggable({ containment: "window" });
    $('#blue').draggable({ containment: "window" });
    $('#green').draggable({ containment: "window" });
    $('#red').draggable({ containment: "window" });
  }

/**
 * reset_challange() => Allows users to reset the challange.
 */
function reset_challange() {
  $("#reset_button").click(function(){
    document.location.reload();
  });
}