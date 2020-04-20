$(document).ready(function(){
    $("#pesquisar").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myDIV .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });