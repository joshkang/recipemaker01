// JavaScript Document

$("#left_menu_handle").click(function() {
var sticky_width = $("#sticky").css("width");
if(sticky_width == "30px") {
$("#sticky").css("width","254");
$(".right_contents_01").css("width","886");
} else if(sticky_width == "254px" ) {
$("#sticky").css("width","30");
$(".right_contents_01").css("width","1110");
}

});


  function HideLeftMenu() {
    if(document.getElementById("left_menu_01").style.display=="none") {
      document.getElementById("left_menu_01").style.display = "block";
      document.getElementById("left_menu_handle").innerText = "◀";
    }
    else {
      document.getElementById("left_menu_01").style.display = "none";
      document.getElementById("left_menu_handle").innerText = "▶";
    }
  }
