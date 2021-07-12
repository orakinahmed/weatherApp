console.log('Testing...');

/** MODIFICATION COMMANDS
 * .css() - To get or to add CSS in an element
 * .val() - To get or to replace the INPUT values in a input box
 * .text() - To get or replace the TEXT inside an html
 * 
 * .html() - REPLACES an elements HTML
 * .append() - ADDS an HTML inside another element at the end
 * 
 * NAVIGATION COMMANDS
 * .parent() - Finds the parent element
 * .find() - Lets you find any child element matching
 * .each(function() {}) - Lets you loop over a list of elements
 * 
 * this - What element invokes the action
 * 
 * EVENT HANDLERs
 * Ex. click, change, blur
 * .on('click', 'element', function() {} );
 */


/**
 * 1) Remove Button Tasks 
 *   a. Make the remove button remove its own specific row
 * 2) Add Button Tasks
 *  a. Get values from the input when add button is clicked.
 *  b. Create a brand new row and insert it into the table using the above values. 
 *  c. Add logic to check if the inputs have the right data and put an error onto the page in the right spot.
 * 
 * foreach jquery
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



//````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

// /**
//  * 1.) Add a update button
//  *      a. add boxes that replace the values of name, channel, age, and education
//  */



// $('table').on('click', '.updateBtn', function(){
//     var tdEle = $(this).parent().parent().find('td'); // [$('td'), $('td'), $('td'), $('td'), $('td')]
  


//     if (this > 4) {

//     } else {

//     }


//     tdEle.each(function(index) {

//         $(this).html('<input type="text">);
//     }); 
// });

// /**2.) Make the update button update the row its on
//  *      a. prevent the input boxes from replacing the modify buttons
//  *          - use a counter with a if statement that allows you to not go into the modify column
//  *      b. replace the update button with an ok button (confirms your input)
//  * 
//  * if the 
//  * 
//  */    






// $('.okBtn').on('click', function() {
//     var name = $('.name').val();

// });

