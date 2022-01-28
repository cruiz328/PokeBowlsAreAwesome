console.log("time", moment().format('MMMM Do YYYY, h:mm:ss a'))
$('#currentDay').html(moment().format("MMM Do YY"));

var timeNow = moment().format('LT');

var hours = parseInt(timeNow.split(':')[0]);
console.log('hours', hours);

// console.log($('.table').find('.eventTextBox'));

$('.table').find('.eventTextBox').each(function (val) {
    console.log($(this).data('time'));

    if (hours === $(this).data('time')) {
        $(this).css('background-color', 'green');
    }
    else if (hours > $(this).data('time')) {
        $(this).css('background-color', 'red');
    }
    else {
        $(this).css('background-color', 'yellow');
    }
})

$('.save').on("click", function () {
    
    var note = $(this).parent().parent().children().find('input').val();
    var hour = $(this).siblings("input").attr("data-time")
   // console.log(note);
    var myStorage = window.localStorage;
});