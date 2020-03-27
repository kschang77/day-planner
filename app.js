// js app engine for workday scheduler
// calls moments.js

// todo: load today's date in the top
//   <p id="currentDay" class="lead"></p>
var currentDayEl = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// tado: display time block from 9a to 5p, or 0900 to 1700, to be exact.
// <div class="container">

var startDay = 9;
var endDay = 17;

// loadrow(hour-x) returns content

function loadRow(rowid) {
  return localStorage.getItem(rowid);
}

// saverow(hour-x, content) return success

function saveRow(rowid, content) {
  if (content === null) {
    // if it's blank, remove the item
    localStorage.removeItem(rowid);
  } else {
    // else, save the content as the item
    localStorage.setItem(rowid, content);
  }
}

//var containerEl = $("#container")
// series of .row, each contain .hour, .timeblock, and .saveBtn -- done
// todo: add color elements to hour blocks by using appropirate style -- done

var curHour = moment().format("HH");

for (i = startDay; i <= endDay; i++) {
  iHour = moment(i, "HH").format("HH");
  //console.log(curHour)
  var rowEl = $("<div class='row hour-" + i + "'></div>");
  // console.log(rowEl)
  //var blankEl = $("<div class='col-sm-1'></div>")
  var hourEl = $(
    "<div class='hour-" +
      i +
      " col-sm-1 hour py-3 text-right'>" +
      moment(i, "HH").format("hh a") +
      "</div>"
  );
  var timeBlockEl = $("<div class='hour-"+i+" col-sm-9 time-block'>");
  var curVal = loadRow("hour-" + i)
  var dispEl = $("<div class='hour-"+i+"'>")
    .addClass("inputvis")
    .addClass("t-display")
  var pEl = $("<p>")
    .text(curVal);
  dispEl.append(pEl)
  if (iHour < curHour) {
    // in the past
    timeBlockEl.addClass("past");
  } else if (iHour === curHour) {
    timeBlockEl.addClass("present");
  } else {
    timeBlockEl.addClass("future");
  }
  var inputDiv = $("<div class='hour-" + i + " inputvis t-edit'></div>").attr(
    "style",
    "display:none"
  );
  var inputArea = $("<textarea/>")
    .attr("style", "width:100%")
    .addClass("hour-" + i)
    .addClass("input" + i)
    .val(curVal);
  inputDiv.append(inputArea);
  timeBlockEl.append(dispEl,inputDiv);

  var saveBtnEl = $(
    "<div class='hour-" + i + " saveBtn py-4 col-sm-2 text-center'>Save</div>"
  );
  rowEl.append(hourEl, timeBlockEl, saveBtnEl);
  $(".container").append(rowEl);
}

// todo: add button to the timeblocks so we can edit // done, sorta
$(".time-block").on("click", function(event) {
  event.preventDefault();
  var el = this.className;
  arr = el.split(" ");
  curHours = arr[0];
  $("." + curHours + ".inputvis").toggle();
  if ($("." + curHours + ".inputvis").css("visibility") != "hidden") {
    $("." + curHours + ".inputvis")
      .find("textarea")
      .focus();
  }
});

// todo: save button writes the stuff to localStorage / done
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var el = this.className;
    arr = el.split(" ");
    curHours = arr[0];
    var txtArea = $(
        "textarea." + curHours
    ).val();
    saveRow(curHours, txtArea);
    $("." + curHours + ".inputvis.t-display"
      ).text(txtArea);
    $("." + curHours + ".inputvis"
      ).toggle();
    });
