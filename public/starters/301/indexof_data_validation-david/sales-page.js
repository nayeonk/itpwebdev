/**
 * calculate total for user's order
 */
var calculate = function() {
  var tax = parseFloat(document.getElementById('tax').value); // set tax to tax rate from form

  var subt = 0; // initialize subtotal
  var total = 0; // reset total

  // build subtotal
  subt = subt + 0;// add figures
  subt = subt + 0; // add mug
  subt = subt + 0; // add t-shirts
  subt = subt + 0; // add watches
  subt = subt + 0; // add lamps
  // set subtotal box to subt

  // total = subt + (subt * tax)

  // set total box to total
    
};

/**
 * increment quantity input by 1
 * @param  {id of the input to increase} id
 */
var increaseNum = function(id) {

};

/**
 * decrement quantity input by 1
 * @param  {id of the input to decrease} id
 */
var decreaseNum = function(id) {
};