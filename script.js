
//add save button feature and clicks, add localStorage capability and notification when it is saved
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    const time = $(this).parent().attr('id');
    const data = $(this).siblings('.description').val();
    localStorage.setItem(time, data);
    $('notification').addClass('show');
  });



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  dayjs().format()

  let now = dayjs();
  dayjs().toDate();
  console.log(now.format());

  let currentTime = timeColor 
  let presentTime = 

  function checkEqual(now, currentTime) {
    return currentTime > now ? "grey"
        : now = currentTime ? "red"
        : "green"
  }

  //show or load the localStorage data from previous use
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  // show current date on top of page
  $('currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

});


