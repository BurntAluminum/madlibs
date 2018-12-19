$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var obscenityInput = $("input#obscenity").val();
    var verbInput = $("input#verb").val();
    var verb2Input = $("input#verb2").val();
    var verb3Input = $("input#verb3").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".obscenity").text(obscenityInput);
    $(".verb").text(verbInput);
    $(".verb2").text(verb2Input);
    $(".verb3").text(verb3Input);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
