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

    var newAddress = { street: streetForm,
      city: cityForm,
      state: stateForm,
       fullAddress: function() {
        return this.street + ", " + this.city + ", " + this.state;
      }
    };

    var newContact = {
      firstName: firstNameForm,
      lastName: lastNameForm,
      address: newAddress.fullAddress()
      };

    $("#contact-list").append("<li><span class='contact clickable'>" + newContact.firstName + "</span></li>");

    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");

    $(".contact").last().click(function() {
      $(".name").text(newContact.firstName + " " + newContact.lastName);
      $(".address").text(newContact.address);
      $("#contacts").show();
    });



    event.preventDefault();
  });




});
