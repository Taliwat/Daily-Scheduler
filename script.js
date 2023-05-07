
//add save button feature and clicks, add localStorage capability and notification when it is saved
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    const time = $(this).parent().attr('id');
    const data = $(this).siblings('.description').val();
    localStorage.setItem(time, data);
    $('notification').addClass('show');
  });
  
  
  
  //get current time from Dayjs, and code color for current time of day.
  function timeStatus() {
    const currentTime = dayjs().hour();
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      
      if (blockHour < currentTime) {
        $(this).addClass('past');
      } else if (blockHour === currentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  timeStatus();
  
  
  // show current date on top of page
  $('currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  
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
});


