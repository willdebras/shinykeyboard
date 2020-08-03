let keymap = {
  backspace: 8,
  tab: 9,
  enter:	13,
  lshift:	16,
  rshift:	16,
  lctr:	17,
  rctr:	17,
  lalt:	18,
  ralt:	18,
  pause:	19,
  caps: 20,
  esc: 27,
  space: 32,
  pgup:	33,
  pgdn:	34,
  end:	35,
  home: 36,
  larrow: 37,
  uarrow:	38,
  rarrow:	39,
  darrow:	40,
  ins:	45,
  del: 46,
  zero:	48,
  one:	49,
  two:	50,
  three:	51,
  four:	52,
  five:	53,
  six:	54,
  seven:	55,
  eight:	56,
  nine:	57,
  a:	65,
  b:	66,
  c:	67,
  d:	68,
  e:	69,
  f:	70,
  g:	71,
  h:	72,
  i:	73,
  j:	74,
  k:	75,
  l:	76,
  m:	77,
  n:	78,
  o:	79,
  p:	80,
  q:	81,
  r:	82,
  s:	83,
  t:	84,
  u:	85,
  v:	86,
  w:	87,
  x:	88,
  y:	89,
  z:	90,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  "lwin": 91,
  "rwin": 92,
  "select key":	93,
  "numpad 0":	96,
  "numpad 1":	97,
  "numpad 2":	98,
  "numpad 3":	99,
  "numpad 4":	100,
  "numpad 5":	101,
  "numpad 6":	102,
  "numpad 7":	103,
  bslash: 220,
  fslash: 191,
  lbrack: 219,
  rbrack: 221,
  comma: 188,
  minus: 189,
  period: 190,
  semi: 186,
  equals: 187,
  scroll: 145,
  backtick: 192,
  apos: 222,
  print: 44
}

function getKeyByValue(value) {
  return Object.keys(keymap).find(key => keymap[key] === value);
}

var shinyKeyboardBinding = new Shiny.InputBinding();
$.extend(shinyKeyboardBinding, {

  // find the dom element with input$id
  // this becomes el downstream
  find: function find(scope) {
    return $(scope).find(".shinykeyboard");
  },

  // get the ids of the element with class selected
  // use this as the input's value
  getValue: function getValue(el) {
    // return everything with selected class and get its id
    var idArray = [];
        $('.selected').each(function () {
          idArray.push(this.id);
        });
        // returning everything but the id and switch
        // and some random empty strings if you don't click EXACTLY the glyph
    return idArray.filter(word => word !== $(el).attr("id"))
                  .filter(word => word !== $(el).attr("id") + "_switch")
                  .filter(word => word !== "");
  },

  // on key click add "selected" class
  // to svg path with the id of the pressed key
  subscribe: function (el, callback) {
    $(el).on("click.shinyKeyboardBinding", function (evt) {
      // if the toggle is selected let the user push new values
      // but remove the class if they clicked on an already selected class
      if ($("#" + $(el).attr("id") + "_switch").is(':checked')) {
        if ($(evt.target).hasClass("selected")) {
          $(evt.target).removeClass("selected");
        } else {
          $(evt.target).addClass('selected');
        }
      } else {
        $(el).find(".selected").removeClass("selected");
        $(evt.target).addClass('selected');
      }
      callback();
    });
    $(document).keyup(function (evt) {
      // 2. CONVERT KEYCODE TO KEY NAME
      let key_down = getKeyByValue(evt.keyCode);
      console.log(evt.keyCode)
      console.log(key_down)
      $("#" + key_down).addClass('selected');
      callback(true);
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
