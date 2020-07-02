function sendSms() {
  console.log("Send Sms hit");

  bootstrap_alert = function () {}; //Alert Messages
  bootstrap_alert.warning = function (message) {
    $("#alert_placeholder").html(
      '<div class="alert alert-success role="alert""><a class="close" data-dismiss="alert">×</a><span>' +
        message +
        "</span></div>"
    );
  };

  function displaySuccessMessage() {
    bootstrap_alert.warning("Email Sent successfully");
  }

  bootstrap_error = function () {}; //Error Messages
  bootstrap_error.error = function (message) {
    $("#alert_placeholder").html(
      '<div class="alert alert-error role="alert""><a class="close" data-dismiss="alert">×</a><span>' +
        message +
        "</span></div>"
    );
  };

  var fname = document.getElementById("fname").value; //Getting form values
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var subject = document.getElementById("subject").value;

  if (fname == "" || email == "" || message == "") {
    bootstrap_error.error("Please Enter Mandatory Fields");
  } else {
    var finalEmail =
      "Hi this is " +
      fname +
      " " +
      lname +
      ", Query: " +
      message +
      ", My email id is: " +
      email;

    Email.send({
      Host: "smtp.gmail.com",
      Username: "marstechweb@gmail.com",
      Password: "Marstech@123",
      To: "marstechweb@gmail.com",
      From: "marstechweb@gmail.com",
      Subject: subject,
      Body: finalEmail,
    }).then((message) => {
      if (message == "ok") {
        displaySuccessMessage();
      }
    });
  }
}
