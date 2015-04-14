$(document).ready(function() {

    var contacts = [];
    var sayHello = function(contact) {
      alert("Yo, " + contact.firstName + "! What's shakin'??");
    };

  $("#addContact").submit(function(event) {
    var firstNameForm = $("input#firstName").val();
    var lastNameForm = $("input#lastName").val();
    var streetForm = $("input#street").val();
    var cityForm = $("input#city").val();
    var stateForm = $("input#state").val();

    var contact = {
      firstName: firstNameForm,
      lastName: lastNameForm,
      street: streetForm,
      city: cityForm,
      state: stateForm
    };

    $("#contact-list").append("<li><span class='contact clickable'>" + contact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $(".first-name").text(contact.firstName);
      $(".last-name").text(contact.lastName);
      $(".street").text(contact.street);
      $(".city").text(contact.city);
      $(".state").text(contact.state);
      $("#contacts").show();
    });



    event.preventDefault();
  });




});
