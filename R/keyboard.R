#' <Add Title>
#'
#' <Add Description>
#' @param elementId input id
#' @param color_palette the color palette to use options include:
#' @param selected the keys selected by default
#'
#' @import htmlwidgets
#'
#' @export
#' @example keyboard()
keyboard <- function(message, width = NULL, height = NULL, elementId = NULL,
                     color_palette = "sharla2", selected = NULL) {

  # subset colors based on the user selected palette
  accent_color = colorlist[[color_palette]][["accent_color"]]
  keyboard_color = colorlist[[color_palette]][["keyboard_color"]]
  modifier_color = colorlist[[color_palette]][["modifier_color"]]
  alphanum_color = colorlist[[color_palette]][["alphanum_color"]]
  accent_color = colorlist[[color_palette]][["accent_color"]]
  background_color = colorlist[[color_palette]][["background_colour"]]
  alphanum_stroke = colorlist[[color_palette]][["alphanum_stroke"]]
  modifier_stroke = colorlist[[color_palette]][["modifier_stroke"]]
  accent_stroke = colorlist[[color_palette]][["accent_stroke"]]
  text_color = colorlist[[color_palette]][["text_color"]]


  # forward options using x
  x = list(
    message = htmltools::HTML("<div class='container'>
                              <input id=", elementId, "_switch' class='toggle-button' type='checkbox'/><br>",
                              glue::glue(keyboard_string), "</div>")
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'keyboard',
    x,
    width = width,
    height = height,
    package = 'shinykeyboard',
    elementId = elementId,
    sizingPolicy = htmlwidgets::sizingPolicy(
      defaultWidth = "100%",
      padding = 0,
      browser.fill = TRUE
    )
  )

}
