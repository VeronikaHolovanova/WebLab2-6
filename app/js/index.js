//-----------CALENDAR----------JQUERY+AJAX-------

$(document).ready(function() {

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>',
    currentText: 'Today',
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    dayNamesMin: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    weekHeader: 'Не',
    dateFormat: 'Month D, Yr'
  });
});