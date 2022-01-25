console.log("time", moment().format('MMMM Do YYYY, h:mm:ss a'))
$('#currentDay').html(moment().format("MMM Do YY")); 

var timeNow = moment().format('LT');

var hours = parseInt(timeNow.split(':')[0]);
console.log('hours', hours);

// console.log($('.table').find('.eventTextBox'));

$('.table').find('.eventTextBox').each(function(val){
    console.log($(this).data('time'));

    if(hours === $(this).data('time')) {
        $(this).css('background-color', 'red');
    }
})