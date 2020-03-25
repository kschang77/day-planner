// js app engine for workday scheduler
// calls moments.js

// todo: load today's date in the top
//   <p id="currentDay" class="lead"></p>
var currentDayEl = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// tado: display time block from 9a to 5p, or 0900 to 1700, to be exact. 
// <div class="container">

var startDay = 9 
var endDay = 17

//var containerEl = $("#container")
// series of .row, each contain .hour, .timeblock, and .saveBtn -- done
// todo: add color elements to hour blocks by using appropirate style -- done

var curHour = moment().format("HH");

for (i=startDay; i<=endDay; i++) {
    iHour = moment(i,"HH").format("HH")
    //console.log(curHour)
    var rowEl = $("<div class='row hour-"+i+"'></div>")
    // console.log(rowEl)
    //var blankEl = $("<div class='col-sm-1'></div>")
    var hourEl = $("<div class='hour-" + i + " col-sm-1 hour py-3 text-right'>"+moment(i,"HH").format("hh a")+"</div>")
    var timeBlockEl = $(`<div class='hour-${i} col-sm-9 time-block '>`)
    if (iHour<curHour) {
        // in the past
        timeBlockEl.addClass("past")
    } else if (iHour === curHour) {
        timeBlockEl.addClass("present")
    } else {
        timeBlockEl.addClass("future")
    }
    var inputDiv = $("<div class='hour-" + i + " inputvis'></div>").attr("style", "display:none")
    var inputArea = $("<textarea/>").attr("cols", "60").addClass("input"+i);
    inputDiv.append(inputArea)
    timeBlockEl.append(inputDiv)

    var saveBtnEl = $("<div class='saveBtn py-4 hour-"+i+" col-sm-2 text-center'>Save</div>")
    rowEl.append(hourEl,timeBlockEl,saveBtnEl);
    $(".container").append(rowEl);
}


// todo: add buttons to the timeblocks so we can edit and save (load on page load)
$(".time-block").on("click", function(event) {
    event.preventDefault();
    var el = this.className;
    arr = el.split(" ");
    curHours = arr[0];
    $("."+curHours+".inputvis").toggle();
    if ($("."+curHours+".inputvis").css("visibility") != "hidden") {
       $("." + curHours + ".inputvis").find('textarea').focus()
        // $("input:text:visible:first").focus();
        console.log("focused?")
    }

    // //alert(this)
    // var el = this.className;
    // arr = el.split(" ");
    // curHours = arr[0];
    // var inputArea = $("<textarea/>").attr("cols","60");
    // $("."+curHours+".time-block").append(inputArea);
}
);
