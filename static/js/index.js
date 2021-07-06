console.log('JS is working');

// make the click button change the h1 color 
$('button').on('click', function() {
    console.log($('h1').css('color'));
    if ($('h1').css('color') === 'rgb(0, 0, 255)' ) {
        $('h1').css({'color':'red'});
    } else {
        $('h1').css({'color':'blue'});
    }
});

// API CALL
// GET DATA
// PUT DATA INTO EACH HTML

/**
 * AJAX IS Javascripts way of doing api requests
 * Has 4 Main Keys
 * URL, METHOD, CONTENTTYPE, SUCCESS
 */
$.ajax({
    url: '/weather/week',
    method: 'GET',
    contentType: "application/json",
    success: function(result) {
        console.log(result);
        var day = result['week'][1]['day'];
        $('.day2').html('<p>' + day + '</p>');
    }
});