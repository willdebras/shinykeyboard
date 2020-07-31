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

  // on keyboard press add selected to the svg element with
  // the id corresponding to the pressed key
  subscribe: function(el, callback) {
    $(document.body).keydown(function (evt) {
      // remove any selected classes
      $(el).find(".selected").removeClass("selected");

      // while this records multiple keys (YAY)
      // I don't know how to store them as an array
      let key_down = String.fromCharCode(evt.keyCode).toLowerCase();
      console.log(key_down)

      // once I can return multiple
      // I need to figure out how to add selected class
      // to all elements
      // for now
      // this just returns the last key pressed, not multiple
      $("#" + key_down).addClass('selected');
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".shinyKeyboardBinding");
  }
});

Shiny.inputBindings.register(shinyKeyboardBinding, 'shinykeyboard.keyboardInput');
