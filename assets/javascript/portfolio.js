// $("#contactSubmit").on("click", function() {
//     alert("Thank you for reaching out to me.  I'll follow up with you shortly.");
// });

$(".firstProject").hover(
    function() {
        $("#firstProjectContent").html("<h5>A website that allows you to search for recipes based on the ingredients you already have or want to use." +
        " You can also find details of restaurants  and grocery stores in your area and filter them by travel time." +
        " This website uses HTML, CSS, Bootstrap, JavaScript, JQUERY, FireBase, Google Maps API, and the Edamame Recipe API.</h5>");
    }
    ,function() {
        $("#firstProjectContent").html("");
    });


$(".secondProject").hover(
    function() {
        $("#secondProjectContent").html("<h5>This is a Hornets Trivia Game! Play to see if you are a Hornets Master!!! This website uses HTML, CSS, Bootstrap, JavaScript, and JQUERY.</h5>");
    }
    ,function() {
        $("#secondProjectContent").html("");
    });

$(".thirdProject").hover(
    function() {
        $("#thirdProjectContent").html("<h5>This webpage allows you to generate gifs of whatever TV show you would like and then click on them to make them play!" +
            " This site uses HTML, CSS, Bootstrap, JavaScript, and the Giffy API.</h5>");
    }
    ,function() {
        $("#thirdProjectContent").html("");
    });

$(".fourthProject").hover(
    function() {
        $("#fourthProjectContent").html("<h5>This is a website where users can create their own account and login to post books they want to trade" +
                                        ", and propose trades for books that other users have posted for trade.  Users are notified by automatic emails to keep them " +
                                        "up to date on when they receive a trade proposal as well as when a user accepts or declines their trade proposal.  This site uses " +
                                        "HTML, CSS, Bootstrap, JavaScript, JQUERY, MySQL, Node.js, Express.js, Sequelize.js, Passport.js, Bcrypt.js, and Nodemailer.</h5>");
    }
    ,function() {
        $("#fourthProjectContent").html("");
    });