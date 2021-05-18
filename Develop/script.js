var m = document.querySelector("#currentDay");
m.textContent = moment().format('dddd[,] MMMM Do YYYY');

$("#btn9").on("click", function() {
    var text = $("#txt9").val();
    localStorage.setItem("9:00",text);
});

$("#btn10").on("click", function() {
    var text = $("#txt10").val();
    localStorage.setItem("10:00", text);
});

$("#btn11").on("click", function() {
    var text = $("#txt11").val();
    localStorage.setItem("11:00", text);
});

$("#btn12").on("click", function() {
    var text = $("#txt12").val();
    localStorage.setItem("12:00", text);
});

$("#btn1").on("click", function() {
    var text = $("#txt1").val();
    localStorage.setItem("1:00", text);
});

$("#btn2").on("click", function() {
    var text = $("#txt2").val();
    localStorage.setItem("2:00", text);
});

$("#btn3").on("click", function() {
    var text = $("#txt3").val();
    localStorage.setItem("3:00", text);
});

$("#btn4").on("click", function() {
    var text = $("#txt4").val();
    localStorage.setItem("4:00", text);
});

$("#btn5").on("click", function() {
    var text = $("#txt5").val();
    localStorage.setItem("5:00", text);
});



$("#txt9").val(localStorage.getItem("9:00"));
$("#txt10").val(localStorage.getItem("10:00"));
$("#txt11").val(localStorage.getItem("11:00"));
$("#txt12").val(localStorage.getItem("12:00"));
$("#txt1").val(localStorage.getItem("1:00"));
$("#txt2").val(localStorage.getItem("2:00"));
$("#txt3").val(localStorage.getItem("3:00"));
$("#txt4").val(localStorage.getItem("4:00"));
$("#txt5").val(localStorage.getItem("5:00"));


var timeNow = parseInt(moment().format('HH'));

$("textarea").each(function () {
    var name = parseInt($(this).attr("name"));
    if (name < timeNow) {
        $(this).addClass("past");
    }


    if (name > timeNow) {
        $(this).addClass("future")
    }

    if (name === timeNow) {
        $(this).addClass("present")
    }

});