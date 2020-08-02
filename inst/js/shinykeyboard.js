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
    var idArray = [];
        $('.selected').each(function () {
          idArray.push(this.id);
        });
    return idArray.filter(word => word !== $(el).attr("id"))
                  .filter(word => word !== $(el).attr("id") + "_switch")
                  .filter(word => word !== "");
  },

  // on key click add "selected" class
  // to svg path with the id of the pressed key
  subscribe: function (el, callback) {
    $(el).on("click.shinyKeyboardBinding", function (evt) {
      // if a key is selected and clicked then remove the class
      if ($(evt.target).hasClass("selected")) {
        $(evt.target).removeClass("selected")
      }
      // if the toggle is selected let the user push new values
      // but remove the class if they clicked on an already selected class
      if ($("#" + $(el).attr("id") + "_switch").is(':checked')) {
        if ($(evt.target).hasClass("selected")) {
          $(evt.target).removeClass("selected")
        } else {
          $(evt.target).addClass('selected');
        }
      } else {
        $(el).find(".selected").removeClass("selected");
        $(evt.target).addClass('selected');
      }
      callback()
    });
    $(document).keyup(function (evt) {
      // 1. GET KEYCODE ARRAY
      pressedKeys = [];
      // while this records multiple keys (YAY)
      // I don't know how to store them as an array
      var key = pressedKeys[evt.keyCode]

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
