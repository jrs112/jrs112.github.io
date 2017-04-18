var myform = $("form#myform");
myform.submit(function(event){
    event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "portfolio_submission";
  var template_idTwo = "portfolio_response";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  emailjs.sendForm(service_id,template_idTwo,"myform")
    .then(function(){
        alert("Sent!");
        myform.find("button").text("Send");
        $("#userName").val("");
        $("#userEmail").val("");
        $("#userMessage").val("");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});
