function sendEmail() {
  console.log("Send Sms hit");

  bootstrap_alert = function () {}; //Alert Messages
  bootstrap_alert.warning = function (message) {
    $("#alert_placeholder").html(
      '<div class="alert alert-success alert-dismissible">' +
        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
        "<strong>Success! </strong>" +
        message +
        "</div>"
    );
  };

  function displaySuccessMessage() {
    bootstrap_alert.warning("Message Sent");
  }

  bootstrap_error = function () {}; //Error Messages
  bootstrap_error.error = function (message) {
    $("#alert_placeholder").html(
      '<div class="alert alert-danger alert-dismissible">' +
        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
        "<strong>Error! </strong>" +
        message +
        "</div>"
    );
  };

  var fname = document.getElementById("fname").value; //Getting form values
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var subject = "Enquiry: " + document.getElementById("subject").value;

  if (fname == "" || email == "" || message == "") {
    bootstrap_error.error("Please Enter Mandatory Fields");
  } else {
    emailjs.init("user_XqqloAFzHLQ0XbKV9skSE");

    var templateParams = {
      firstName: fname,
      lastName: lname,
      subject: subject,
      email: email,
      message: message,
    };

    emailjs.send("service_2a7y4cu", "template_doxzpdp", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        displaySuccessMessage();
        fname = "";
        lname = "";
        subject = "";
        email = "";
        message = "";
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    // Email.send({
    //   Host: "smtp.gmail.com",
    //   Username: "marstechweb@gmail.com",
    //   Password: "Marstech@123",
    //   To: "marstechweb@gmail.com",
    //   From: "marstechweb@gmail.com",
    //   Subject: subject,
    //   Body: finalEmail,
    // }).then((message) => {
    //   if (message == "OK") {
    //     displaySuccessMessage();
    //   }
    // });
  }
}
