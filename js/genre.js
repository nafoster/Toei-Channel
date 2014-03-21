$(document).ready(function() {
      $(".toku").on("click", function(){
        $( "#default-genre-screen" ).hide();
        event.preventDefault();
        $( "#anime" ).hide();
        $( "#drama" ).hide();
        $( "#other" ).hide();
        $("#toku").show("slow");
        event.preventDefault();
      });
      $(".anime").on("click", function(){
        $( "#default-genre-screen" ).hide();
        event.preventDefault();
        $( "#toku" ).hide();
        $( "#drama" ).hide();
        $( "#other" ).hide();
        $("#anime").show("slow");
        event.preventDefault();
      });
      $(".drama").on("click", function(){
        $( "#default-genre-screen" ).hide();
        event.preventDefault();
        $( "#toku" ).hide();
        $( "#anime" ).hide();
        $( "#other" ).hide();
        $("#drama").show("slow");
        event.preventDefault();
      });
      $(".other").on("click", function(){
        $( "#default-genre-screen" ).hide();
        event.preventDefault();
        $( "#toku" ).hide();
        $( "#drama" ).hide();
        $( "#anime" ).hide();
        $("#other").show("slow");
        event.preventDefault();
      });
    });