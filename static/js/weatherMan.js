console.log('Testing...');

/**
 * .css() - To find css or to pass in css dictionary
 * .val() - To find values of input boxes or put data into input boxes
 * .html() - Replaces an elements inner html 
 * 
 * .append() - Adds an element to the end
 * .parent() - Finds the parent element
 * .remove() - Deletes an element
 * 
 * this - What element invokes the action
 * 
 * Events -> Click, Change, Blur
 * .on('click', 'element', function() {} );
 */


/**
 * 1) Remove Button Tasks 
 *   a. Make the remove button remove its own specific row
 * 2) Add Button Tasks
 *  a. Get values from the input when add button is clicked.
 *  b. Create a brand new row and insert it into the table using the above values. 
 *  c. Add logic to check if the inputs have the right data and put an error onto the page in the right spot.
 */





























// What invokes the action? this -> .removeBtn
// $('table').on('click', '.removeBtn', function() {
//     $(this).parent().parent().remove()
// });
    
// $('#addBtn').on('click', function() {

//     var name = $('.name').val();
//     var channel = $('.channel').val();
//     var age = $('.age').val();
//     var education = $('.education').val();

//     var isError = false;

//     if ( name.length > 12 || name === '') {
//         $('#errorBox1').html('<p>Enter a valid name!</p>');
//         isError = true;
//     } else {
//         $('#errorBox1').html('<p></p>');  
//     }

//     if ( channel === 'CNN' || channel === '') {
//         $('#errorBox2').html('<p>Enter a valid channel. (CNN doesn"t count)</p>');
//         isError = true;
//     } else {
//         $('#errorBox2').html('<p></p>');  
//     }

//     if ( education.length > 10 || education === '') {
//         $('#errorBox4').html('<p>Enter a valid education!</p>');
//         isError = true;
//     } else {
//         $('#errorBox4').html('<p></p>');  
//     }

//     if (isError) {     
//         return false;
//     } else {            
//         $('table').append('<tr><td>' + name + '</td><td>' + channel + '</td><td>' + age + '</td><td>' + education +'</td><td><button class="removeBtn modifyBtns">Remove</button></td></tr>'); 
//     }

// });