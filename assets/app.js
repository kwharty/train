

/*var config = {
    apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
    storageBucket: "fir-click-counter-7cdb9.appspot.com"
};

firebase.initializeApp(config);
*/
// VARIABLES
// --------------------------------------------------------------------------------

// Get a reference to the database service
var database = firebase.database();
//event.preventDefault();
var curTime = moment().format("HH:MM");
$("#currentTime").append(curTime); 


//getting the curTime in console log but nothing in the jumbotron???
console.log(curTime);


/* name = $("#emloyee-name-input").val().trim();
var role = $("#role-input").val().trim();
var startDate = $("#start-input").val().trim();
var rate = $("#rate-input").val().trim(); */
    var randomDate = "02/23/1999";
    var randomFormat = "MM/DD/YYYY";
    var convertedDate = moment(randomDate, randomFormat);

    // Using scripts from moment.js write code below to complete each of the following.
    // Console.log to confirm the code changes you made worked.

    // 1 ...to convert the randomDate into three other date formats
    console.log(convertedDate.format("MM/DD/YY"));
    console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));
    console.log(convertedDate.format("X"));
    console.log("----------------------------------------");

    // 2 ...to determine the time in years, months, days between today and the randomDate
    console.log(convertedDate.toNow());
    console.log(convertedDate.diff(moment(), "years"));
    console.log(convertedDate.diff(moment(), "months"));
    console.log(convertedDate.diff(moment(), "days"));
    console.log("----------------------------------------");

    // 3 ...to determine the number of days between the randomDate and 02/14/2001
    var newDate = moment("02/14/2001", randomFormat);
    console.log(convertedDate.diff(moment(newDate), "days"));

    // 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
    console.log(convertedDate.format("X"));
    console.log("----------------------------------------");

    // 5 ...to determine what day of the week and what week of the year this randomDate falls on.
    console.log(convertedDate.format("DDD"));
    console.log(convertedDate.format("dddd"));

$("#add-employee-btn").on("click", function (event) {

    event.preventDefault();


    var name = $("#employee-name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startDate = $("#start-input").val().trim();
    var rate = $("#rate-input").val().trim();

    console.log(name);
    console.log(role);

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate

    });

});



    /*database.ref().push({
        name: name,
       role: role,
        startDate: startDate,
        rate: rate
      }), */



    database.ref().on("child_added", function (snapshot) {


        var sv = snapshot.val();
        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().role);
        console.log(snapshot.val().startDate);
        console.log(snapshot.val().rate);

        console.log(sv.role);
//var months = 100;
//var billed = rate*250;

        var tableRow = $("<tr>").append(
            $("<td>").text(sv.name),
            $("<td>").text(sv.role),
            $("<td>").text(sv.startDate),
            $("<td>").text(sv.rate),
          //  $("<td>").text(sv.months),
          // $("<td>").text(sv.billed)


        );

        $("#employee-table > tbody").append(tableRow);

    




        // Change the HTML to reflect
        //  $("#employee-table").text("<tr>");
        //  $("#employee-table").text(snapshot.val());
        /*$("#employee-table").text(snapshot.val().role);
        $("#employee-table").text(snapshot.val().startDate);
        $("#employee-table").text(snapshot.val().rate); */


        // Handle the errors */
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });


