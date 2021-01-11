

$(document ).ready(function()
{


$(".item").mouseenter(function() {
$(".item").css("cursor","pointer");
  });

/* Hides Controls of the video**/ 
var vids = $("video"); 
$.each(vids, function(){
	this.controls = false; 
}); 

/** Plays the video when mouse hovers over any of the videos */

$("video").mouseenter(function() {
	this.play()
   
});


  /** stops video from palying when mouse leaves the video container as well as changing the background to */
  $("video").mouseleave(function(e) {
	this.pause();
	this.currentTime = 0;

	$("video").css("opacity","1");
  });


  
  /**Function to turn backgrounds of other pictures darker when hovering over another *******/
  $("#video1").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video7, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });

  $("#video2").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video1, #video3, #video4, #video5,#video6, #video7, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });

  $("#video3").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video1, #video2, #video4, #video5,#video6, #video7, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });

  
  $("#video4").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video1, #video5,#video6, #video7, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });
  $("#video5").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video1,#video6, #video7, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });
  $("#video6").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video1, #video7, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });

  $("#video7").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video1, #video8, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });

  $("#video8").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video7, #video1, #video9,#video10, #video11, #video12").css("opacity","0.5");
  });

  $("#video9").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video7, #video8, #video1,#video10, #video11, #video12").css("opacity","0.5");
  });
  $("#video10").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video7, #video8, #video9,#video1, #video11, #video12").css("opacity","0.5");
  });
  $("#video11").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video7, #video8, #video9,#video10, #video1, #video12").css("opacity","0.5");
  });
  $("#video12").mouseenter(function(e) {
	$(e.target).css("opacity","1"); 
	$("#video2, #video3, #video4, #video5,#video6, #video7, #video8, #video9,#video10, #video11, #video1").css("opacity","0.5");
  });
 
/*********************************************************************************************************************************************/
  

});











