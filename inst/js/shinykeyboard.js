var shinyKeyboardBinding = new Shiny.InputBinding();
$.extend(shinyKeyboardBinding, {

  // find the dom element with input$id
  // this becomes el downstream
  find: function find(scope) {
    return $(scope).find(".shinykeyboard")
  },

  // get the ids of the element with class selected
  // use this as the input's value
  getValue: function getValue(el) {
    // return everything with selected class and get its id
    var value = $(el).find('.selected').attr('id')
    return value
  },

  // on key click add "selected" class
  // to svg path with the id of the pressed key
  subscribe: function (el, callback) {
    $(el).on("click.shinyKeyboardBinding", function (evt) {
      // remove all of the selected classes inside our element
      $(el).find(".selected").removeClass("selected");
      // set the selected class to the closest clicked part
      console.log($(evt.target).attr('id'))
      $(evt.target).addClass('selected');
      callback()
    });
    $(document).keyup(function (evt) {

      // 1. GET KEYCODE ARRAY
      pressedKeys = [];
      // while this records multiple keys (YAY)
      // I don't know how to store them as an array
      var key = pressedKeys[evt.keyCode]
      console.log(pressedKeys)

      // 2. CONVERT KEYCODE TO KEY NAME
      // eventually this needs to return from a look up table
      // to include for non-alphabetic keys
      // but lets get this working for multiple letters first
      let key_down = String.fromCharCode(evt.keyCode).toLowerCase()

      // 3. ADD SELECTED CLASS TO ALL ELEMENTS IN ARRAY
      // add class "selected" to all elements
      // in the pressedKeys vector
      $("#" + key_down).addClass('selected');
      callback(true)
    });
    // 4. USE KEYDOWN TO CLEAR ARRAY
    //    AND CLEAR SELECTED CLASSES?
    $(document).keydown(function (evt) {
      $(el).find(".selected").removeClass("selected");
      callback(true)
    });
  },
  unsubscribe: function (el) {
    $(el).off(".shinyKeyboardBinding");
  }
});

Shiny.inputBindings.register(shinyKeyboardBinding, 'shinykeyboard.keyboardInput');
